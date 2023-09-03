import { Component, Input } from '@angular/core'
import { FocusSession } from '../timer.interface'

@Component({
	selector: 'app-timer-session',
	standalone: true,
	imports: [],
	templateUrl: './timer-session.component.html',
	styleUrls: ['./timer-session.component.scss'],
})
export class TimerSessionComponent {
	@Input({ required: true }) session!: FocusSession
}
