import { Component, OnInit } from '@angular/core';
import { Coche } from '../coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss'],
})
export class CocheComponent  implements OnInit {

  coche: Coche[] = [
    {marca: 'Toyota', modelo: 'Corolla', color:'Rojo'},
    {marca: 'Honda', modelo:'Civic', color:'Azul'}
  ]
  constructor() { }

  ngOnInit() {}

}
