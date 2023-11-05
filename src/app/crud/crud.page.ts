import { Component, OnInit } from '@angular/core';
import { CocheService } from './coche.service';
import { Coche } from './coche';
import { ModalController, ToastController, ToastOptions } from '@ionic/angular';
import { CocheDetailComponent } from './coche-detail/coche-detail.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  constructor(
    public coches:CocheService,
    private modal:ModalController,
    private toast:ToastController
  ) { }

  ngOnInit() {
    this.coches.getAll().subscribe()
  }

  onDeleteClicked(coche:Coche) {
    var _coche = {...coche}
    this.coches.deleteCoche(_coche).subscribe(
      async _=>{
      const options:ToastOptions = {
        message: 'Coche eliminado',
        duration: 1000,
        position: 'bottom',
        color: 'danger',
        cssClass:'card-ion-toast'
      }
      const toast = await this.toast.create(options)
      toast.present()
    })
  }

  async presentForm(data:Coche | null, onDismiss:(result:any)=>void) {
    const modal = await this.modal.create({
      component:CocheDetailComponent,
      componentProps: {
        coche:data
      },
      cssClass:'modal-full-right-side'
    })
    modal.present()
    modal.onDidDismiss().then(result => {
      if(result && result.data) {
        onDismiss(result)
      }
    })
  }

  onNewCoche() {
    var onDismiss = (info:any) => {
      switch(info.role) {
        case 'ok': {
          this.coches.addCoche(info.data).subscribe(async user => {
            const options:ToastOptions = {
              message: 'Coche creado',
              duration: 1000,
              position: 'bottom',
              color: 'tertiary',
              cssClass:'card-ion-toast'
            }
            const toast = await this.toast.create(options)
            toast.present()
          })
        }
        break;
        default:
          console.error("No deberia entrar")
      }
    }
    this.presentForm(null, onDismiss)
  }

  onCardClicked(coche:Coche) {
    var onDismiss = (info:any) => {
      switch(info.role) {
        case 'ok': {
          this.coches.updateCoche(info.data).subscribe(async user => {
            const tOptions:ToastOptions = {
              message: 'Coche actualizado',
              duration: 1000,
              position: 'bottom',
              color: 'tertiary',
            }
            const toast = await this.toast.create(tOptions)
            toast.present()
          })
        }
        break;
        case 'delete': {
          this.coches.deleteCoche(info.data).subscribe(async user => {
            const tOptions:ToastOptions = {
              message: 'Coche eliminado',
              duration: 1000,
              position: 'bottom',
              color: 'danger',
            }
            const toast = await this.toast.create(tOptions)
            toast.present()
          })
        }
        break;
        default:
          console.error("No debería entrar")
        break;
      }
    }
    this.presentForm(coche, onDismiss)
  }

}
