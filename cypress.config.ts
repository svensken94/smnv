import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: '6iuxjk',

	component: {
		devServer: {
			framework: 'angular',
			bundler: 'webpack',
		},
		specPattern: '**/*.cy.ts',
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: '**/*.spec.ts',
		baseUrl: 'http://localhost:4200',
	},
})
