import { AppComponent } from 'src/app/app.component'

describe('should mount', () => {
	it('mounts', () => {
		cy.mount(AppComponent)
	})
})
