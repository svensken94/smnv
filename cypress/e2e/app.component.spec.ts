describe('Application requirements', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('must have initial title', () => {
		cy.title().should('equal', 'Vlad Simonov | Personal site')
	})

	it('must have router outlet', () => {
		cy.get('router-outlet').should('exist')
	})
})
