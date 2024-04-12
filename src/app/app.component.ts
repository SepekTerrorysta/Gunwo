import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SepekComponent } from './gupoty/sepek/sepek.component';
import { PapiezComponent } from './gupoty/papiez/papiez.component';
import { NawigacjaComponent } from './gupoty/nawigacja/nawigacja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NawigacjaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
