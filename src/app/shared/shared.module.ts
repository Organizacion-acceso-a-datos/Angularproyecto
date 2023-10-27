import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from '../navegador/navegador.component';
import { RouterModule } from '@angular/router';
import { AutoresComponent } from '../about/autores/autores.component';


@NgModule({
  declarations: [NavegadorComponent, AutoresComponent],
  imports: [
    CommonModule, IonicModule, FormsModule, RouterModule
  ],
  exports: [CommonModule, IonicModule, FormsModule, NavegadorComponent, AutoresComponent]
})
export class SharedModule { }
