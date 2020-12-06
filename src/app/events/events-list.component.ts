import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor = "let event of events" class="col-md-5">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events:IEvent[];

    constructor(
        private eventService:EventService, 
        private router:ActivatedRoute,
    ) {
        
    }

    ngOnInit() {
        this.events = this.router.snapshot.data['events'];
    }
}