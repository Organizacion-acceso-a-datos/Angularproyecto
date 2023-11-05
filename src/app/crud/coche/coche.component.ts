import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss'],
})
export class CocheComponent  implements OnInit {

  @Input() coche?: Coche | null
  @Output() onCardClicked:EventEmitter<void> = new EventEmitter<void>()
  @Output() onDeleteClicked:EventEmitter<void> = new EventEmitter<void>()
  
  constructor() { }

  ngOnInit() {}

  onCardClick() {
    this.onCardClicked.emit()
  }

  onDeleteClick(event:any) {
    this.onDeleteClicked.emit()
    event.stopPropagation()
  }
}
