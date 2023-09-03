import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'focus/timer',
		pathMatch: 'full',
	},
	{
		path: 'focus',
		redirectTo: 'focus/timer',
		pathMatch: 'full',
	},
	{
		path: 'focus',
		loadComponent: () => import('./mini-apps/focusing/focusing.component'),
		children: [
			{
				path: 'timer',
				loadComponent: () => import('./mini-apps/focusing/views/timer/timer.component'),
			},
			{
				path: 'profile',
				loadComponent: () => import('./mini-apps/focusing/views/profile/profile.component'),
			},
			{
				path: 'statistics',
				loadComponent: () => import('./mini-apps/focusing/views/statistics/statistics.component'),
			},
		],
	},
]
