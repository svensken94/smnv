describe('Initial state', () => {
	beforeEach(() => {
		cy.visit('/focus')
	})

	it('must have initial title', () => {
		cy.title().should('be.equal', 'Focusing')
	})

	it('must opening timer section as default', () => {
		cy.url().should('contain', '/focus/timer')
	})
})

describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/focus')
	})

	it('click on tab bar must open corresponding section', () => {
		cy.get('[data-cy="stats-link"]').click()
		cy.url().should('contain', '/focus/statistics')
		cy.wait(1000)
		cy.get('[data-cy="profile-link"]').click()
		cy.url().should('contain', '/focus/profile')
		cy.wait(1000)
		cy.get('[data-cy="timer-link"]').click()
		cy.url().should('contain', '/focus/timer')
	})
})
