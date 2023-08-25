import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: '6iuxjk',

	component: {
		devServer: {
			framework: 'angular',
			bundler: 'webpack',
		},
		specPattern: '**/*.cy.ts',
		viewportWidth: 390,
		viewportHeight: 844,
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) WebKit/8611 (KHTML, like Gecko) Mobile/18G82 [FBAN/FBIOS;FBDV/iPhone13,4;FBMD/iPhone;FBSN/iOS;FBSV/14.7.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBIA/FBIOS]',
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: '**/*.spec.ts',
		baseUrl: 'http://localhost:4200',
	},
})
