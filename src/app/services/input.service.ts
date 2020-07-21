import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  public keyDown$ = new Subject<KeyboardEvent>();
  public keyUp$ = new Subject<KeyboardEvent>();
  constructor() { }

  public keyDown(e: KeyboardEvent): void {
    this.keyDown$.next(e);
  }

  public keyUp(e: KeyboardEvent): void {
    this.keyUp$.next(e);
  }
}
