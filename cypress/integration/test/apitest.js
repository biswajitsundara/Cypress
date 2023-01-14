describe('sample tests',()=>{

    const apicall = (endPoint,abilitiesCount,statsCount) =>{
        cy.request({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${endPoint}`
        }).then((response)=>{
             console.log(JSON.stringify(response));
             expect(response.body.abilities.length).equals(abilitiesCount);
             expect(response.body.forms[0].name).equals(endPoint);
             expect(response.body.stats.length).equals(statsCount);
        })
    }

    it('pokeman test',()=>{

        apicall("ditto", 2, 6);
        apicall("bulbasaur", 2, 6);
        apicall("ivysaur", 2, 6);
   
    })

})