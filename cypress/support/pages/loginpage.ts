export class LoginPage{

    private userId:string = '#login_field';
    private password:string = '#password';
    private signIn:string = 'input[name="commit"]';

    public visitPage(){
        cy.visit('/login');
    }
    public enterUserId(userid:string){
        cy.get(this.userId).type(userid);
    }

    public enterPassword(password:string){
        cy.get(this.password).type(password);
    }

    public enterSignin(){
        cy.get(this.signIn).click();
    }
}