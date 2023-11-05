import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegadorComponent } from '../navegador/navegador.component';
import { RouterModule } from '@angular/router';
import { AutoresComponent } from '../about/autores/autores.component';
import { CocheComponent } from '../crud/coche/coche.component';
import { CocheDetailComponent } from '../crud/coche-detail/coche-detail.component';
import { SelectorFotoComponent } from '../crud/selector-foto/selector-foto.component';


@NgModule({
  declarations: [NavegadorComponent, AutoresComponent, CocheComponent, CocheDetailComponent, SelectorFotoComponent],
  imports: [
    CommonModule, IonicModule, FormsModule, RouterModule, ReactiveFormsModule
  ],
  exports: [CommonModule, IonicModule, FormsModule, NavegadorComponent, AutoresComponent, CocheComponent, CocheDetailComponent,SelectorFotoComponent]
})
export class SharedModule { }
