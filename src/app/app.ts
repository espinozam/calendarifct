import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariPractiques } from './components/formulari-practiques/formulari-practiques';
import { Calendari } from './components/calendari/calendari';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormulariPractiques, Calendari],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calendarifct');
}
