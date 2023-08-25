import { Component, ElementRef, Input, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
	selector: 'ui-tab',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
	@Input({ required: true }) path: string = ''
	element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement
}
