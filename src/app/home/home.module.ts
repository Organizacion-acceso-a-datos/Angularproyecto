import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavegadorComponent } from '../navegador/navegador.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NavegadorComponent],
  exports: [NavegadorComponent]
})
export class HomePageModule {}
