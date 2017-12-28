import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardService } from '../../services/card-service/card.service';
import { Fraction } from '../../classes/fraction';

@Component({
  selector: 'app-equiivilent-cards',
  templateUrl: './equiivilent-cards.component.html',
  styleUrls: ['./equiivilent-cards.component.css'],
  providers: [CardService]
})
export class EquiivilentCardsComponent implements OnInit, OnChanges {
  @Input() parentCard: Fraction;
  factors: Fraction;
  deck: Fraction[];

  constructor(private cardService: CardService) {
    console.log('paretn card: ', this.parentCard);
    this.deck = [];
  }

  ngOnInit() {
    this.deck = this.generateNewCards(this.parentCard);
   }

  setFactors(factors: any) {
    console.log('flarg');
    this.factors = factors;
    console.log('Equivilent cards factors: ', this.factors);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.deck = this.generateNewCards(this.parentCard);
  }

  generateNewCards(factors: Fraction) {
    let deck: Fraction[] = new Array<Fraction>();
    let newNom = 0;
    let newDennom = 0;
    let multiple = 0;

    for (let i = 0; i < 4; i++) {
      const newFraction: Fraction = new Fraction;
      multiple = this.generateRandomNumbers(factors.denominator, 12);

      if (i % 2 === 0) {
         newNom = factors.numerator * multiple;
         newDennom = factors.denominator * multiple;

         newFraction.numerator = newNom;
         newFraction.denominator = newDennom;
      } else {
        const multiple2 = this.generateRandomNumbers(factors.denominator, 12);
        newNom = factors.numerator * multiple;
        newDennom = factors.denominator * multiple2;

        newFraction.numerator = newNom;
        newFraction.denominator = newDennom;
      }

      deck.push(newFraction);
    }

    deck = this.shuffle(deck);

    return deck;
  }

  shuffle(array: Array<any>) {
    let currentIndex = array.length;
    let tempVal;
    let randomIndex;

    while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

       tempVal = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = tempVal;
    }

    return array;
  }

  generateRandomNumbers(min: number, max: number) {
    let num = 0;

    num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  }
}
