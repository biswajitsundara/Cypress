describe('OAuth Tests', () => {

    let baseAPI = 'http://coop.apps.symfonycasts.com/';
    let access_token;
    let user_id;

    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: `${baseAPI}token`,
            form: true,
            body: {
                "client_id": "BiswaApp",
                "client_secret": "7b7ce44631dd1b988e219932b8abbadb",
                "grant_type": "client_credentials"
            }

        }).then((response) => {
            //cy.log(JSON.stringify(response));
            access_token = response.body.access_token;
        });
    })

    it('Basic OAuth testcase', () => {
        cy.request({
            method: 'GET',
            url: `${baseAPI}api/me`,
            headers: {
                'Authorization': 'Bearer ' + access_token,
            }
        }).then((response) => {
            user_id = response.body.id;
            cy.request({
                method: 'POST',
                url: `${baseAPI}api/${user_id}/chickens-feed`,
                headers:{
                    'Authorization': 'Bearer ' + access_token
                }
            }).then((response)=>{
                cy.log(JSON.stringify(response.body));
               expect(response.status).to.equal(200);
            })
        })
    });
});