import { NgModule } from '@angular/core';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { NavegadorComponent } from '../navegador/navegador.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CrudPageRoutingModule
  ],
  declarations: [CrudPage,],
  exports: [NavegadorComponent]
})
export class CrudPageModule {}
