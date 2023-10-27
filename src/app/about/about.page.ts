import { Component, OnInit } from '@angular/core';
import { Autor } from './autor';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  private _autores:BehaviorSubject<Autor[]> = new BehaviorSubject<Autor[]>([]);
  public autores$:Observable<Autor[]> = this._autores.asObservable();

  constructor(
  ) { }

  ngOnInit() {
    var autores = [
      {nombre:"Borja", foto: "../../assets/img/F9M3iu2WQAEoC_Q.jpg", apellidos:"Bravo Casermeiro", edad:22, cuentaGit:"boorjabraavo21"},
      {nombre:"Javier", foto: "../../assets/img/F9M3iu2WQAEoC_Q.jpg", apellidos:"Moreno Rodríguez", edad:21, cuentaGit:"Javiemr"}
    ];
    this._autores.next(autores);
  }
}
