import { Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export const SELECTOR_FOTO_VALUE_ACCESSOR:any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectorFotoComponent),
  multi: true
}

@Component({
  selector: 'app-selector-foto',
  templateUrl: './selector-foto.component.html',
  styleUrls: ['./selector-foto.component.scss'],
  providers: [SELECTOR_FOTO_VALUE_ACCESSOR]
})
export class SelectorFotoComponent  implements OnInit, ControlValueAccessor, OnDestroy {

  private _foto = new BehaviorSubject("")
  public foto$ = this._foto.asObservable()
  public hasValue:boolean = false
  public isDisabled:boolean = false

  constructor(
   private modal:ModalController
  ) { }
  writeValue(obj: any): void {
    if(obj) {
      this.hasValue = true
      this._foto.next(obj)
    }
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._foto.complete()
  }

  propagarCambio = (obj:any) => {}

  registerOnChange(fn: any) {
    this.propagarCambio = fn
  }

  cambiarFoto(pic:string) {
    this.hasValue = pic!=""
    this._foto.next(pic);
    this.propagarCambio(pic)
  }

  onChangeFoto(event:Event, fileLoader:HTMLInputElement) {
    event.stopPropagation()
    fileLoader.onchange = () => {
      if(fileLoader.files && fileLoader.files?.length > 0) {
        var file = fileLoader.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.cambiarFoto(reader.result as string)
        }
        reader.onerror = (error) => {
          console.log(error)
        }
      }
    }
    fileLoader.click()
  }

  onDeleteFoto(event:Event) {
    event.stopPropagation()
    this.cambiarFoto('')
  }

  close() {
    this.modal?.dismiss()
  }
}
