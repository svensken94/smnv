import { RouterTestingModule } from '@angular/router/testing'
import { TabComponent } from '@ui/tabs/tab/tab.component'

it('mounts', () => {
	cy.mount(TabComponent, {
		componentProperties: {
			path: 'test',
		},
		imports: [RouterTestingModule],
	})
})

it('has default path', () => {
	cy.mount(TabComponent, {
		imports: [RouterTestingModule],
	}).then(wrapper => {
		const { component } = wrapper
		expect(component.path).to.not.eq(undefined)
	})
})

it('has only text if icon not provided', () => {
	cy.mount(
		`
      <ui-tab path="profile" data-cy="tab">
        Statistics
      </ui-tab>
    `,
		{
			imports: [TabComponent, RouterTestingModule],
		}
	)

	cy.get('[data-cy="tab"] div').should('be.visible')
	cy.get('[data-cy="tab"] div').should('not.be.empty')
})

it('must be not visible if no icon and text', () => {
	cy.mount(
		`
      <ui-tab path="profile" data-cy="tab"></ui-tab>
    `,
		{
			imports: [TabComponent, RouterTestingModule],
		}
	)

	cy.get('[data-cy="tab"] div').should('not.be.visible')
	cy.get('[data-cy="tab"] div').should('be.empty')
})
