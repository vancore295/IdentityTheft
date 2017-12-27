import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';

@Injectable()
export class CardService {
  cardChanger: EventEmitter<any> = new EventEmitter();
  // Observable objects
  private selectedCard = new Subject<any>();
    // Observalbe object streams
    selectedCard$ = this.selectedCard.asObservable();



  constructor() { }

  // Pass objects
  setCard(card: any) {
    this.selectedCard.next(card);
    // this.emitNewCard(card);
  }

  emitNewCard(card: any) {
    this.cardChanger.emit(card);
    console.log('card emited: ', card);
  }

  getNewCardEmiter() {
    console.log('getting card change emitter');
    return this.cardChanger;
  }

}
