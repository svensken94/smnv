import { Component } from '@angular/core'
import { TimerPlayerComponent } from './timer-player/timer-player.component'

@Component({
	selector: 'app-timer',
	standalone: true,
	imports: [TimerPlayerComponent],
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {}
export default TimerComponent
