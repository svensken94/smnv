import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { tablerPlayerPauseFilled, tablerPlayerStopFilled } from '@ng-icons/tabler-icons'

@Component({
	selector: 'app-timer-player',
	standalone: true,
	imports: [NgIconComponent],
	templateUrl: './timer-player.component.html',
	styleUrls: ['./timer-player.component.scss'],
	viewProviders: [provideIcons({ tablerPlayerPauseFilled, tablerPlayerStopFilled })],
})
export class TimerPlayerComponent {}
