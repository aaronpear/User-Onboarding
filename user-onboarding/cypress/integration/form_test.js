describe('Create User App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsCheckbox = () => cy.get('input[name=agreeToTerms]');

    it('checks if name input correctly updates', () => {
        nameInput().should('exist');
        nameInput().should('have.value', '');
        nameInput().type('wasd');
        nameInput().should('have.value', 'wasd');
    })

    it('checks if email input correctly updates', () => {
        emailInput().should('exist');
        emailInput().should('have.value', '');
        emailInput().type('verycoolemailname@ohboy.com');
        emailInput().should('have.value', 'verycoolemailname@ohboy.com');
    })

    it('checks if password input correctly updates', () => {
        passInput().should('exist');
        passInput().should('have.value', '');
        passInput().type('atleast7characterslong');
        passInput().should('have.value', 'atleast7characterslong');
    })

    it('checks if the terms of service checkbox can be checked', () => {
        termsCheckbox().should('exist');
        termsCheckbox().should('not.be.checked');
        termsCheckbox().click();
        termsCheckbox().should('be.checked');
        termsCheckbox().click();
        termsCheckbox().should('not.be.checked');
    })
})