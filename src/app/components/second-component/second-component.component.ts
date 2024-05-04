import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css',
})
export class SecondComponentComponent {
  name: string = 'Matheus';
  age: number = 22;
  occupation = 'Programmer';
  hobbies = ['Correr', 'Jogar', 'Outro hobbie'];
  car = {
    year: '2019',
    name: 'Argo',
  };
}
