import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName = 'Joaquim';
  idade = 22;

  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
  };

  title = 'curso-angular';
}
