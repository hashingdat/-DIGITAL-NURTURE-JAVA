import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'; // Update path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // <--- MUST INCLUDE THESE
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
