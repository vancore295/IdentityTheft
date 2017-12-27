import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service/card.service';
import { EventEmitter } from '@angular/core';
import { Fraction } from '../../classes/fraction';

@Component({
  selector: 'app-card-generator',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css'],
  providers: [CardService]
})
export class CardGeneratorComponent implements OnInit {
  ones = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  twos = [3, 5, 7, 9, 11];
  threes = [4, 5, 7, 8, 10, 11];
  fours = [5, 7, 9, 11];
  fives = [6, 7, 8, 9, 11];
  sixes = [7, 11];
  sevens = [8, 9, 10, 11, 12];
  eights = [9, 11];
  nines = [10, 11];
  tens = [11];
  elevens = [12];

  denominators = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  deck: Fraction[];
  factors: Fraction;
  cardSubcription: any;
  cardSet: Boolean = false;


  constructor(private cardService: CardService) {
    this.deck = Array<Fraction>();
    this.cardSet = false;
  }

  ngOnInit() {
    this.factors = new Fraction;
    this.factors.numerator = 0;
    this.factors.denominator = 0;
  }


  generatedeck(numerator: number, denominators: Array<number>) {
    this.deck = [];
    for (let i = 0; i < denominators.length; i++) {
      const temp = {
        numerator: numerator,
        denominator: denominators[i]
      };

      this.deck.push(temp);
    }
    console.log(this.deck);
  }

  chooseDeck(num: number) {
    switch (num) {
      case 1:
        this.generatedeck(num, this.ones);
        break;
      case 2:
        this.generatedeck(num, this.twos);
        break;
      case 3:
        this.generatedeck(num, this.threes);
        break;
      case 4:
        this.generatedeck(num, this.fours);
        break;
      case 5:
        this.generatedeck(num, this.fives);
        break;
      case 6:
        this.generatedeck(num, this.sixes);
        break;
      case 7:
        this.generatedeck(num, this.sevens);
        break;
      case 8:
        this.generatedeck(num, this.eights);
        break;
      case 9:
        this.generatedeck(num, this.nines);
        break;
      case 10:
        this.generatedeck(num, this.tens);
        break;
      case 11:
        this.generatedeck(num, this.elevens);
        break;
      default:
        return null;
    }
  }

  getParentCard(card: Fraction) {
    this.factors = card;
    if (this.factors !== null && this.factors !== undefined) {
      console.log(this.factors);
      this.cardSet = true;
    }
  }

}
