import { Component } from '@angular/core';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Femminicidi';
  currentYear = new Date().getFullYear();
}
