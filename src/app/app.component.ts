import { Component, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styles: [],
})
export class AppComponent {
	title = inject(Title)

	constructor() {
		this.title.setTitle('Vlad Simonov | Personal site')
	}
}
