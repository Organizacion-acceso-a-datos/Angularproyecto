import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from '../navegador/navegador.component';



@NgModule({
  declarations: [NavegadorComponent],
  imports: [
    CommonModule, IonicModule, FormsModule,
  ],
  exports: [NavegadorComponent]
})
export class SharedModule { }
