import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css',
})
export class ConditionalComponent {
  canShow: boolean = true;
  name = 'João';
}
