describe('Application requirements', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('must have router outlet', () => {
		cy.get('router-outlet').should('exist')
	})
})
