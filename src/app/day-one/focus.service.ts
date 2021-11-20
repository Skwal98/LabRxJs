import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { defer, fromEvent, merge, Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class FocusService extends Observable<Element | null> {
  constructor(
    @Inject(DOCUMENT) documentRef: Document,
    { nativeElement }: ElementRef
  ) {
    const def$ = defer(() => of(documentRef.activeElement));
    const focusIn$ = fromEvent<FocusEvent>(nativeElement, 'focusin').pipe(
      map(({ target }) => target)
    );
    const focusOut$ = fromEvent<FocusEvent>(nativeElement, 'focusout').pipe(
      map(({ relatedTarget }) => relatedTarget)
    );

    const focusedElement$ = merge(def$, focusIn$, focusOut$).pipe(
      map((x) => (x && nativeElement.contains(x) ? (x as Element) : null)),
      distinctUntilChanged()
    );

    super((subscriber) => focusedElement$.subscribe(subscriber));
  }
}
