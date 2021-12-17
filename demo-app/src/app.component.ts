import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = ['Home', 'Explore', 'Help'];

  public count(itemCount: number): number[] {
      const numbers: number[] = [];
      for (let i = 0; i < itemCount; i++) {
          numbers.push(i);
      }
      return numbers;
  }
}
