class headerSection{
    elements = { 

        email:'[type="email"]',
        password:'[type="password"]',
        btnLogin: 'form[class="Login col-md-8 col-lg-4 col-11"] > button',
        registerLink: 'form[class="Login col-md-8 col-lg-4 col-11"] > p > a', // element has text "Create Account"    
        
   }

   putEmail(email) {
       cy.get(this.elements.email).type(email)
   }

   putPassword(password) {
    cy.get(this.elements.password).type(password)
   }

   loginUser(email,password) {
    cy.get(this.elements.email).type(email)
    cy.get(this.elements.password).type(password)
    cy.get(this.elements.btnLogin).click()
   }
  
};
module.exports = new headerSection()