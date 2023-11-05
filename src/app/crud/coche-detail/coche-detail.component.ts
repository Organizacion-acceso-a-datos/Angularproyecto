import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coche } from '../coche';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coche-detail',
  templateUrl: './coche-detail.component.html',
  styleUrls: ['./coche-detail.component.scss'],
})
export class CocheDetailComponent  implements OnInit {

  form:FormGroup;
  mode:'New' | 'Edit' = 'New';
  @Input() set coche (_coche: Coche | null) {
    if (_coche) {
      this.mode = 'Edit'
      this.form.controls['foto'].setValue(_coche.foto)
      this.form.controls['id'].setValue(_coche.id)
      this.form.controls['marca'].setValue(_coche.marca)
      this.form.controls['modelo'].setValue(_coche.modelo)
      this.form.controls['color'].setValue(_coche.color)
    }
  }

  constructor(
    private modal:ModalController,
    private formBuilder:FormBuilder
  ) { 
    this.form = formBuilder.group ({
      id:[null],
      foto:[''],
      marca:['', Validators.required],
      modelo:['',Validators.required],
      color:['',Validators.required]
    })
  }

  ngOnInit() {}

  onCancel() {
    this.modal.dismiss(null, 'cancel')
  }

  onSubmit() {
    this.modal.dismiss(this.form.value, 'ok')
  }

  onDelete() {
    this.modal.dismiss(this.form.value, 'delete')
  }

}
