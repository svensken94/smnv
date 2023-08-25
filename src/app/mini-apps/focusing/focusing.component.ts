import { Component, ElementRef, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { tablerChartArcs3, tablerClock, tablerUserCircle } from '@ng-icons/tabler-icons'
import { TabsComponent } from '@ui/tabs'
import { TabComponent } from '@ui/tabs/tab/tab.component'

@Component({
	selector: 'app-focusing',
	standalone: true,
	imports: [RouterOutlet, TabsComponent, TabComponent, NgIconComponent],
	templateUrl: './focusing.component.html',
	styleUrls: ['./focusing.component.scss'],
	viewProviders: [provideIcons({ tablerClock, tablerUserCircle, tablerChartArcs3 })],
})
export class FocusingComponent {
	title = inject(Title)
	elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

	constructor() {
		this.title.setTitle('Focusing')
	}
}
export default FocusingComponent
