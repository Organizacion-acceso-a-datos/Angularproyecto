import { NgModule } from '@angular/core';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CrudPageRoutingModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
