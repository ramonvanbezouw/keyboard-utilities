import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  public hidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent): void {
    if (['/', '?'].includes(e.key)) {
      this.hidden = !this.hidden;
    }
  }

}
