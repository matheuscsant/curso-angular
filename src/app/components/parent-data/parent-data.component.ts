import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() userData!: {
    email: string;
    role: string;
  };
}
