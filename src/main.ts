import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RegistrarmateriasComponent } from './app/registrarmaterias/registrarmaterias.component';

@Component({
  selector: 'app-root',
  imports: [RegistrarmateriasComponent],
  template: `
    <app-registrarmaterias></app-registrarmaterias>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
