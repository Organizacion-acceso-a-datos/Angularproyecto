import { Component, Input, OnInit } from '@angular/core';
import { Autor } from '../autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss'],
})
export class AutoresComponent  implements OnInit {

  @Input() autor?:Autor | null

  constructor() { }

  ngOnInit() {}

}
