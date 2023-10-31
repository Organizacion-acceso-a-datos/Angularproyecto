import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coche } from './coche';

class CocheNotFoundException extends Error {

}

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private _coches = new BehaviorSubject<Coche[]>([])
  public coches$ = this._coches.asObservable()

  constructor() { }

  public getAll():Observable<Coche[]> {
    return new Observable(obs => {
      var coches:Coche[] = [
        {id:1, marca:"Seat",modelo:"Leon",color:"blanco"},
        {id:2, marca:"Audi",modelo:"A6",color:"negro"},
        {id:3, marca:"BMW",modelo:"Serie 1",color:"gris"}
      ]
      this._coches.next(coches)
      obs.next(coches)
      obs.complete()
    })
  }

  public getCoche(id:number):Observable<Coche> {
    return new Observable(obs => {
      var coches = [...this._coches.value]
      var coche = coches.find(c => c.id == id)
      if (coche) {
        obs.next(coche)
      } else {
        obs.error(new CocheNotFoundException)
      }
      obs.complete()
    })
  }

  public updateCoche(coche:Coche):Observable<Coche> {
    return new Observable(obs => {
      var coches = [...this._coches.value]
      var index = coches.findIndex(c => c.id == coche.id)
      if (index < 0) {
        obs.error(new CocheNotFoundException)
      } else {
        coches[index] = coche
        obs.next(coche)
        this._coches.next(coches)
      }
      obs.complete()
    })
  }

  public deleteCoche(coche:Coche):Observable<Coche> {
    return new Observable(obs => {
      var coches = [...this._coches.value]
      var index = coches.findIndex(c => c.id = coche.id)
      if (index < 0) {
        obs.error(new CocheNotFoundException)
      } else {
        coches = [...coches.slice(0,index),...coches.slice(index+1)]
        this._coches.next(coches)
        obs.next(coche)
      }
      obs.complete()
    })
  }

  public deleteAll():Observable<void> {
    return new Observable(obs => {
      this._coches.next([])
      obs.next()
      obs.complete()
    })
  }
}
