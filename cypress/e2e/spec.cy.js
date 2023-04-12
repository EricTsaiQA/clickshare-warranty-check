describe('Clickshare Warranty Check Page', () => {

  beforeEach(() => {
    cy.visit('https://www.barco.com/en/clickshare/support/warranty-info')
    //accpet the trust dialog
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()
  })

  it('Valid Serial Number Input', () => {
    //input a valid serial number and send it out
    cy.get('#SerialNumber').type('1863552437').wait(2000)
    cy.contains('Get info ').click().wait(5000)
    //Validate there should have a warranty result
    //also there are 5 description term dt should be listed
    cy.get('.c-warranty__result-item').should('have.length',1)
    cy.get('dt').should('have.length',5)
  })
  
  it('Invalid Serial Number Input - Less Than 6 Characters', () => {
    cy.get('#SerialNumber').type('12345').wait(2000)
    cy.contains('Get info ').click().wait(5000)
    //Validate when user inputs a serial number length is less than 6
    //It should through the warnning message
    cy.contains('Minimum 6 characters required')
  })  

  it('Invalid Serial Number Input - Contains Invalid Characters', () => {
    cy.get('#SerialNumber').type('12?456').wait(2000)
    cy.contains('Get info ').click().wait(5000)
    //Validate when user inputs a serial number contains symbol
    //It should through the warnning message
    cy.contains('Please enter a valid serial number')
  })

})