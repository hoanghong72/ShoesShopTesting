class headerSection{
    elements = { 
        contactInfor:'[class="col-md-6 d-flex align-items-center display-none"] > p', //include phone number and email
        facebook:'[class="fab fa-facebook-f"]',
        instagram: '[class="fab fa-instagram"]',
        linkedin: '[class="fab fa-linkedin-in"]',
        youtube: '[class="fab fa-youtube"]',
        socialLink: '[class=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center"] > a',
        pinterest: '[class="fab fa-pinterest-p"]',
        logo: 'div[class="col-md-3 col-4 d-flex align-items-center"] > a', 
        inputSearch: 'div[class="col-md-6 col-8 d-flex align-items-center"] > form > input', // XPath: "//div[@class="col-12 d-flex align-items-center"]/form/input"
        btnSearch: 'div[class="col-md-6 col-8 d-flex align-items-center"] > form > button',
        registerLink: 'div[class="col-md-3 d-flex align-items-center justify-content-end Login-Register"] > a', // eq(1) | XPath: '(//a[text()="Register"])[2]' --> get the second <a> tag 
        loginLink: 'div[class="col-md-3 d-flex align-items-center justify-content-end Login-Register"] > a',  // eq(1) (beacause it has 2 element)
        cartIcon: 'div[class="col-md-3 d-flex align-items-center justify-content-end Login-Register"] > a > i[class="fas fa-shopping-bag"]', // XPath: '(//a[@class="fas fa-shopping-bag"])[2]'
        badge: 'div[class="col-md-3 d-flex align-items-center justify-content-end Login-Register"] > a > span',
        btnName: 'div[class="btn-group"] > button',
        dropdownMenu: '.pc-header',
        //Xpath: //div[@class="col-md-3 d-flex align-items-center justify-content-end Login-Register"]//*[@class="name-button dropdown-toggle"]
   }
   putKeywords(text) {
        cy.get(this.elements.inputSearch).type(text)
   }
   clickSearch() {
        cy.get(this.elements.btnSearch).click()
   }

   foundItem() {
        cy.wait(5000)
        cy.get('.border-product').eq(0).should('be.visible')
   }

    notFoundItem() {
        cy.wait(5000)
        cy.get('.border-product').should('not.exist')
    }

    assertValidationInputMessage(text){
        cy.get(this.elements.inputSearch).then(($input) => {
            expect($input[0].validationMessage).to.eq(text)
          })
    }
   assertPhoneNumber(phoneNumber) {
       cy.get(this.elements.contactInfor).eq(0).should('have.text',phoneNumber)
   }

   assertEmail(email) {
        cy.get(this.elements.contactInfor).eq(1).should('have.text',email)
   }
   
   displaySocialIcons() {
        cy.get(this.elements.facebook)
        .should('have.css', 'font-family','"Font Awesome 5 Brands"')        
        
        cy.get(this.elements.instagram)
        .should('have.css', 'font-family','"Font Awesome 5 Brands"') 

        cy.get(this.elements.linkedin)
        .should('have.css', 'font-family','"Font Awesome 5 Brands"') 

        cy.get(this.elements.youtube)
        .should('have.css', 'font-family','"Font Awesome 5 Brands"') 

        cy.get(this.elements.pinterest)
        .should('have.css', 'font-family','"Font Awesome 5 Brands"') 
        //chưa tìm ra cách so sánh content trong Font Awesome" của pseudo of element
        //.should('eq', '\f39e'); // Or .then()
   }

   displayLogo() {
        cy.get(this.elements.logo).find('img')     
        .should('have.prop', 'naturalWidth')
        .and('be.greaterThan', 0)
   }

   assertInputPlaceholder(text){
        cy.get(this.elements.inputSearch)
        .should('have.attr', 'placeholder', text)
   }

   assertBtnSearch(text,color) {
        cy.get(this.elements.btnSearch)
        .should('have.text', text)
        .and('have.css','background-color', color)
   }

   assertRegisterText(text) {
        cy.get(this.elements.registerLink).eq(0).should('have.text',text)
   }

   assertLoginText(text){
        cy.get(this.elements.loginLink).eq(1).should('have.text', text)
   }

   assertCart(color) {
        cy.get(this.elements.cartIcon).should('have.css', 'font-family','"Font Awesome 5 Pro"')
        cy.get(this.elements.badge)
        .should('have.css','background-color', color)
   }       
   
   checkActiveSocialLink() {
        const targetFacebook = 'https://www.facebook.com',
        targetInstagram = 'https://www.instagram.com',
        targetinkedin = ' https://www.linkedin.com',
        targetYoutube = 'https://www.youtube.com',
        targetPinterest = 'https://www.pinterest.com';

        cy.get(this.elements.socialLink).eq(0).should('have.attr', 'href', targetFacebook)
        cy.get(this.elements.socialLink).eq(1).should('have.attr', 'href', targetInstagram)
        cy.get(this.elements.socialLink).eq(2).should('have.attr', 'href', targetinkedin)
        cy.get(this.elements.socialLink).eq(3).should('have.attr', 'href', targetYoutube)
        cy.get(this.elements.socialLink).eq(4).should('have.attr', 'href', targetPinterest)
   }

   checkActiveLogoLink () {
        cy.get(this.elements.logo)
        .should('have.attr', 'href', "/")
   }

   checkActiveRegisterLink () {
        cy.get(this.elements.registerLink).eq(0).click()
        cy.contains('button', 'Register').should('be.visible')        
        cy.go('back')
   }

   checkActiveLoginLink () {
        cy.get(this.elements.loginLink).eq(1).click()
        cy.contains('button', 'Login').should('be.visible')        
        cy.go('back')
    }

    checkActiveCartLink () {
        cy.get(this.elements.cartIcon).click()
        cy.get('[class=" alert alert-info text-center mt-3"]').should('be.visible')        
        cy.go('back')
    }    

    visitLoginPage() {
        cy.get(this.elements.loginLink).eq(1).click()        
    }
    
    displayBtnName () {
        cy.get(this.elements.btnName).eq(1)
        .should('contain', 'Hi, ')
    }

    checkActiveProfileLink(){
        cy.get(this.elements.btnName).eq(1).click()
        cy.get(this.elements.dropdownMenu).contains('Profile').click()
        cy.get('[class="author-card-name mb-2"]').should('be.visible')
        
    }

    clickLogout(){
        cy.get(this.elements.btnName).eq(1).click()
        cy.get(this.elements.dropdownMenu).contains('Logout').click()
    }

};
module.exports = new headerSection()