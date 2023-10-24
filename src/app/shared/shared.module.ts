import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from '../navegador/navegador.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavegadorComponent],
  imports: [
    CommonModule, IonicModule, FormsModule, RouterModule
  ],
  exports: [CommonModule, IonicModule, FormsModule, NavegadorComponent]
})
export class SharedModule { }
