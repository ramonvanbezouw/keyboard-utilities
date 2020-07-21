import { Component, HostListener } from '@angular/core';
import { InputService } from 'src/app/services/input.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyboard-utilities';

  constructor(private inputService: InputService, private styleService: StyleService) { }

  @HostListener('window:keydown', ['$event'])
  public keyDown(e: KeyboardEvent): void {
    this.inputService.keyDown(e);
    this.styleService.keyboardInput(e);
    e.preventDefault();
  }

  @HostListener('window:keyup', ['$event'])
  public keyUp(e: KeyboardEvent): void {
    this.inputService.keyUp(e);
  }
}
