import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titulo = 'store-2';
  subtitulo = 'para todo lo demás';
  nombre!: string;
  selection!: string;
  cities: any = ['Barcelona', 'Caracas', 'Rio de Janeiro', 'Santiago de Chile'];
  urlImage: string = 'https://baconmockup.com/640/360';
  evaluacion: number = 6;

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityCliked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }
}
