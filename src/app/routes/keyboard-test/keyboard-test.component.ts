import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputService } from 'src/app/services/input.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-keyboard-test',
  templateUrl: './keyboard-test.component.html',
  styleUrls: ['./keyboard-test.component.scss']
})
export class KeyboardTestComponent implements OnInit {

  public keys$ = new BehaviorSubject<KeyboardEvent[]>([]);

  constructor(private inputService: InputService) {
    inputService.keyDown$.pipe(
      map(e => ({...e, key: e.key.toLowerCase()})),
      filter(e => !this.keys$.value.some(f => f.key === e.key))
    ).subscribe(e => this.keys$.next([...this.keys$.value, e]));
    inputService.keyUp$.pipe(
      map(e => ({...e, key: e.key.toLowerCase()})),
      filter(e => this.keys$.value.some(f => f.key === e.key))
    ).subscribe(e => {
      this.keys$.value.splice(this.keys$.value.findIndex(f => e.key === f.key), 1);
      this.keys$.next([...this.keys$.value]);
    });
  }
  ngOnInit(): void {
  }

}
