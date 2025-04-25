import { Component } from '@angular/core';
import { NavbarComponent } from './navBar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day1';
}
