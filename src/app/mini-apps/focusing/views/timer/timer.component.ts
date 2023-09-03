import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { createStore } from '@ngneat/elf'
import {
	addEntities,
	getEntitiesCount,
	getEntitiesIds,
	selectActiveEntity,
	selectManyByPredicate,
	setActiveId,
	withActiveId,
	withEntities,
} from '@ngneat/elf-entities'
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state'
import { TimerPlayerComponent } from './timer-player/timer-player.component'
import { TimerSessionComponent } from './timer-session/timer-session.component'
import { FocusSession } from './timer.interface'

@Component({
	selector: 'app-timer',
	standalone: true,
	imports: [TimerPlayerComponent, NgFor, AsyncPipe, TimerSessionComponent, NgIf],
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
	sessionsStore = createStore(
		{
			name: 'sessions',
		},
		withEntities<FocusSession>(),
		withActiveId()
	)
	sessions$ = this.sessionsStore.pipe(selectManyByPredicate(entity => entity.id !== this.sessionsStore.value.activeId))
	active$ = this.sessionsStore.pipe(selectActiveEntity())

	persist = persistState(this.sessionsStore, {
		key: 'sessions',
		storage: localStorageStrategy,
	})

	ngOnInit(): void {
		this.sessionsStore.subscribe(state => {
			console.log(state)
		})

		this.active$.subscribe({
			next: value => {
				console.log(value)
			},
		})
	}

	async addSession() {
		const count = this.sessionsStore.query(getEntitiesCount())

		this.sessionsStore.update(
			addEntities({
				id: count + 1,
				title: 'Title',
				duration: 30,
			})
		)
		this.sessionsStore.update(setActiveId(this.sessionsStore.query(getEntitiesIds())[0]))
	}

	reset() {
		this.sessionsStore.reset()
	}
}
export default TimerComponent
