import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from '../navegador/navegador.component';
import { RouterModule } from '@angular/router';
import { AutoresComponent } from '../about/autores/autores.component';
import { CocheService } from '../crud/coche.service';


@NgModule({
  declarations: [NavegadorComponent, AutoresComponent, CocheService],
  imports: [
    CommonModule, IonicModule, FormsModule, RouterModule
  ],
  exports: [CommonModule, IonicModule, FormsModule, NavegadorComponent, AutoresComponent, CocheService]
})
export class SharedModule { }
