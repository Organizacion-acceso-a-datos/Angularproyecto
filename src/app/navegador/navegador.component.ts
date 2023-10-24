import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss'],
})
export class NavegadorComponent  implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {}

  onClick(){
    this.route.navigate(['/about']);
  }

}
