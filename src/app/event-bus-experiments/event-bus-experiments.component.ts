import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABALE } from 'app/event-bus-experiments/event-bus';
import { testLessons } from 'app/shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top Level component broadcast all lessons')
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABALE, testLessons.slice(0));
  }

}
