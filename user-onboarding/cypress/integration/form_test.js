describe('Create User App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsCheckbox = () => cy.get('input[name=agreeToTerms]');
    const submitButton = () => cy.get('.submit-button');

    const typeValidName = () => {
        nameInput().type('name');
    }

    const typeValidEmail = () => {
        emailInput().type('email@site.com');
    }

    const typeValidPass = () => {
        passInput().type('1234567');
    }

    it('name input correctly updates', () => {
        nameInput().should('exist');
        nameInput().should('have.value', '');
        nameInput().type('wasd');
        nameInput().should('have.value', 'wasd');
    })

    it('email input correctly updates', () => {
        emailInput().should('exist');
        emailInput().should('have.value', '');
        emailInput().type('verycoolemailname@ohboy.com');
        emailInput().should('have.value', 'verycoolemailname@ohboy.com');
    })

    it('password input correctly updates', () => {
        passInput().should('exist');
        passInput().should('have.value', '');
        passInput().type('atleast7characterslong');
        passInput().should('have.value', 'atleast7characterslong');
    })

    it('the terms of service checkbox can be checked', () => {
        termsCheckbox().should('exist');
        termsCheckbox().should('not.be.checked');
        termsCheckbox().click();
        termsCheckbox().should('be.checked');
    })


    describe('checks for complete form completion and submission', () => {
        
        it('fills all fields and submits the form; new user successfully rendered', () => {
            nameInput().type('firstname lastname');
            emailInput().type('thesickestemail@googmeal.com');
            passInput().type('1234567');
            termsCheckbox().click();
            submitButton().should('exist');
            submitButton().click();

            cy.contains('firstname lastname');
            cy.contains('thesickestemail@googmeal.com');
        })
    })

    describe('cannot submit an invalid form', () => {
        it('empty nameInput disables submitButton', () => {
            typeValidEmail();
            typeValidPass();
            termsCheckbox().click();
            submitButton().should('be.disabled');
        })

        it('empty emailInput disables submitButton', () => {
            typeValidName();
            typeValidPass();
            termsCheckbox().click();
            submitButton().should('be.disabled');
        })
        
        it('empty passInput disables submitButton', () => {
            typeValidName();
            typeValidEmail();
            termsCheckbox().click();
            submitButton().should('be.disabled');
        })

        it('unchecked termsCheckbox disables submitButton', () => {
            typeValidName();
            typeValidEmail();
            typeValidPass();
            submitButton().should('be.disabled');
        })

    })
})