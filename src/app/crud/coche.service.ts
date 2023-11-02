import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Coche } from './coche';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

class CocheNotFoundException extends Error {

}

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private _coches:BehaviorSubject<Coche[]> = new BehaviorSubject<Coche[]>([])
  public coches$:Observable<Coche[]> = this._coches.asObservable()

  constructor(
    private http:HttpClient
  ) { }

  public addCoche(coche:Coche):Observable<Coche> {
    var _coche:any = {
      marca:coche.marca,
      modelo:coche.modelo,
      color:coche.color
    }
    return this.http.post<Coche>(environment.apiUrl+"/coches",_coche).pipe(tap(_=>{
      this.getAll().subscribe();
    }))
  }

  public getAll():Observable<Coche[]> {
    return this.http.get<Coche[]>(environment.apiUrl+"/coches").pipe(tap((coches:any[]) => {
      this._coches.next(coches)
    }))
    /*return new Observable(obs => {
      var coches:Coche[] = [
        {id:1, marca:"Seat",modelo:"Leon",color:"blanco"},
        {id:2, marca:"Audi",modelo:"A6",color:"negro"},
        {id:3, marca:"BMW",modelo:"Serie 1",color:"gris"}
      ]
      this._coches.next(coches)
      obs.next(coches)
      obs.complete()
    })*/
  }

  public getCoche(id:number):Observable<Coche> {
    return this.http.get<Coche>(environment.apiUrl+`/coches/${id}`)
    /*return new Observable(obs => {
      var coches = [...this._coches.value]
      var coche = coches.find(c => c.id == id)
      if (coche) {
        obs.next(coche)
      } else {
        obs.error(new CocheNotFoundException)
      }
      obs.complete()
    })*/
  }

  public updateCoche(coche:Coche):Observable<Coche> {
    return new Observable(obs => {
      this.http.patch<Coche>(environment.apiUrl+`/coche/${coche.id}`,coche).subscribe(_=>{
        this.getAll().subscribe(_=>{
          obs.next(coche)
        })
      })
    })
    /*return new Observable(obs => {
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
    })*/
  }

  public deleteCoche(coche:Coche):Observable<Coche> {
    return new Observable(obs => {
      this.http.delete<Coche>(environment.apiUrl+`/coche/${coche.id}`).subscribe(_=> {
        this.getAll().subscribe(_=> {
          obs.next(coche)
        })
      })
    })
    /*return new Observable(obs => {
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
    })*/
  }
}
