import { Component, ElementRef, OnInit } from '@angular/core';
import { defer, fromEvent, merge, Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { FocusService } from './focus.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss'],
})
export class DayOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onFocus(element: Element | null) {
    console.log(element);
  }
}
