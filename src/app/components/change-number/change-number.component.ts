import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() changeNumberXCem: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    console.log('Emitindo evento');
    this.changeNumber.emit();
  }
  
  handleClickXCem(): void {
    console.log('Emitindo evento x100');
    this.changeNumberXCem.emit();
  }
}
