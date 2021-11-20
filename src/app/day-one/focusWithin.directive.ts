import { Directive, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FocusService } from './focus.service';

@Directive({
  selector: '[focusWithin]',
  outputs: ['focusWithin'],
  providers: [FocusService],
})
export class FocusWithinDirective {
  constructor(
    @Inject(FocusService) readonly focusWithin: Observable<Element | null>
  ) {}
}
