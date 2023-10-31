import { Component, OnInit } from '@angular/core';
import { CocheService } from './coche.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  constructor(
    public coches:CocheService
  ) { }

  ngOnInit() {
    this.coches.getAll()
  }

}
