import { Component, OnInit } from '@angular/core';
import { Autor } from './autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public autores:Autor[] = [];

  constructor(
  ) { }

  ngOnInit() {
    this.autores = [
      {nombre:"Borja", foto:"../../../assets/img/img1.png", apellidos:"Bravo Casermeiro", edad:22, cuentaGit:"boorjabraavo21"},
      {nombre:"Javier", foto:"../../../assets/img/img1.png", apellidos:"Moreno Rodríguez", edad:21, cuentaGit:"Javiemr"}
    ];
  }
}
