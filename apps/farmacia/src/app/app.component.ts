import { Component } from '@angular/core';

@Component({
  selector: 'ventas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [
    {
      brand: 'Zapatillas',
      variant: 'A1',
      price: 20
    },
    {
      brand: 'Pantalon',
      variant: 'A2',
      price: 80
    },
    {
      brand: 'Medias',
      variant: 'A3',
      price: 50
    }
  ]
}
