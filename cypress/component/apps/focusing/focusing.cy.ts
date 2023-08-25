import { RouterOutlet } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { FocusingComponent } from 'src/app/mini-apps/focusing'

describe('should mount', () => {
	beforeEach(() => {
		cy.mount(FocusingComponent, {
			imports: [RouterOutlet, RouterTestingModule],
		})
	})

	it('has router outlet', () => {
		cy.get('[data-cy="focusing-outlet"]').should('exist')
	})

	it('has not empty tab bar', () => {
		cy.get('[data-cy="tabs"]').should('exist')
		cy.get('[data-cy="tabs"]').children().should('not.be.empty')
	})
})
