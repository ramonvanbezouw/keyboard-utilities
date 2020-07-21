import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { InputService } from 'src/app/services/input.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-key-indicator',
  templateUrl: './key-indicator.component.html',
  styleUrls: ['./key-indicator.component.scss']
})
export class KeyIndicatorComponent implements OnInit {

  public keyData: KeyboardEvent;

  @Input()
  public set data(value: KeyboardEvent) {
    this.keyData = value;
    if (value.key.length > 0) {
      this.multiChar = true;
    }
  }

  @HostBinding('class.multiChar')
  public multiChar = false;

  constructor() {

  }

  ngOnInit(): void {
  }

}
