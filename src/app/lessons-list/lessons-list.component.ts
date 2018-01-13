import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABALE } from 'app/event-bus-experiments/event-bus';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[];
  constructor() {
    console.log('lesson list component is register as an observer ..')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABALE, this);
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('Lessons List component recieved data');
    this.lessons = data;
  }
}
