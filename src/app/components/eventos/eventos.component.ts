import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  showText: boolean = true;
  showOtherText: boolean = true

  showMessage(): void {
    this.showText = !this.showText;
  }

  showOtherMessage(): void {
    this.showOtherText = !this.showOtherText;
  }
}
