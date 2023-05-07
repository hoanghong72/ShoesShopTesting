import header from '../pages/headerSection'
import login from '../pages/login'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
  //hook event
  
beforeEach(() => {
    // runs before each test in the block
    cy.viewport(1280, 1100)
    cy.visit('https://shoeshop-youtube-zpunet.netlify.app')
      
})
  // test Suite or test Scenario
describe('Test UI Header Section', () => {
    //test case
    it("TCHS1 - Verify all elements are displayed with the  user has not logged in", () => {

        header.assertPhoneNumber("+255 768 356 890") //pass
        header.assertEmail("info@zpunet.com") //pass
        header.displaySocialIcons() //pass
        header.displayLogo() //pass
        header.assertInputPlaceholder("Search") //pass
        header.assertBtnSearch("search", "rgb(0, 0, 0)")//pass
        header.assertRegisterText('Register') //pass
        header.assertLoginText("Login") //pass
        header.assertCart("rgb(255, 0, 0)") //pass
    
        })
    })

describe('Test Function of Header Section', () => {
    
    //test case
    it('TCHS2 - Verify all link active with the  user has not logged in', () => {

        header.checkActiveSocialLink()
        header.checkActiveLogoLink()
        header.checkActiveRegisterLink()
        header.checkActiveLoginLink()

    })

    it('TCHS3 - Verify Register link and Login link is invisible and Name button text with the  user has logged in successfully', () => {

        header.visitLoginPage()
        login.loginUser('anh@gmailcom','123456')
        header.displayBtnName()
    })

    
    it('TCHS4 - Verify dropdown list link in Name button is active  with the  user has logged in successfully', () => {
       
        header.visitLoginPage()
        login.loginUser('anh@gmailcom','123456')
        header.checkActiveProfileLink()
        header.clickLogout()
        header.assertRegisterText("Register")
        header.assertLoginText("Login")
        
    })

    it('TCHS5 - Verify Search function found products with keywords', () => {
        
        header.putKeywords('shoe for men')
        header.clickSearch()
        header.foundItem()

    })

    it('TCHS6 - Verify Search function does not find products with keywords', () => {
        
        header.putKeywords('12')
        header.clickSearch()
        header.notFoundItem()                
    })

    it('TCHS7 - Verify Search function with empty keywords', () => {
        
        header.clickSearch()
        header.assertValidationInputMessage('Please fill out this field.')             
    })

})
