import { RouterTestingModule } from '@angular/router/testing'
import { TabsComponent } from '@ui/tabs'
import { TabComponent } from '@ui/tabs/tab/tab.component'

describe('empty tab list', () => {
	beforeEach(() => {
		cy.mount(TabsComponent)
	})

	it('must be empty', () => {
		cy.get('[data-cy-root]').should('be.empty')
	})

	it('must be not visible', () => {
		cy.get('[data-cy-root]').should('not.be.visible')
	})
})

describe('tab list', () => {
	it('one tab', () => {
		cy.mount(
			`
      <ui-tabs data-cy="tab-list">
        <ui-tab path="test">Test</ui-tab>
      </ui-tabs>
    `,
			{
				imports: [TabComponent, TabsComponent, RouterTestingModule],
			}
		)

		cy.get('[data-cy="tab-list"]').should('be.visible')
		cy.get('[data-cy="tab-list"]').children().should('have.length', 1)
	})

	it('random tab count', () => {
		const tabCount = Math.floor(Math.random() * 5) + 1

		cy.mount(
			`
      <ui-tabs data-cy="tab-list">
        ${new Array(tabCount)
					.fill(0)
					.map(() => `<ui-tab path="test">Test</ui-tab>`)
					.join('')}
      </ui-tabs>
    `,
			{
				imports: [TabComponent, TabsComponent, RouterTestingModule],
			}
		)

		cy.get('[data-cy="tab-list"]').should('be.visible')
		cy.get('[data-cy="tab-list"]').children().should('have.length', tabCount)
	})
})
