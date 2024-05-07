import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css',
})
export class EmitterComponent {
  numero: number = 0;

  onChangeNumber(): void {
    console.log('Evento recebido');
    this.numero = Math.floor(Math.random() * 10);
  }

  onChangeNumberXCem(): void {
    console.log('Evento recebido X Cem');
    this.numero = Math.floor(Math.random() * 100);
  }
}
