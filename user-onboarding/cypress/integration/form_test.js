describe('Create User App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    
    const nameInput = () => cy.get('input[name=name]');

    it('checks if name input correctly updates', () => {
        nameInput().should('exist');
        nameInput().should('have.value', '');
        nameInput().type('wasd');
        nameInput().should('have.value', 'wasd');
    })
})