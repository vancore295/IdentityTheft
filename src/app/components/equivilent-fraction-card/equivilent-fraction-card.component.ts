import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { CardService } from '../../services/card-service/card.service';
import { Subscription } from 'rxjs/Subscription';
import { Fraction } from '../../classes/fraction';

@Component({
  selector: 'app-equivilent-fraction-card',
  templateUrl: './equivilent-fraction-card.component.html',
  styleUrls: ['./equivilent-fraction-card.component.css']
})
export class EquivilentFractionCardComponent implements OnInit, OnChanges, AfterViewInit {
  context: CanvasRenderingContext2D;
  @Input() cardData: Fraction;
  @Input() currentParent: Fraction;
  @ViewChild('myCanvas') line;
  @Output() cardSelectedEmiter = new EventEmitter<Fraction>();

  factors: Fraction;
  selected: Boolean = false;
  fractionValue: Number;
  correct: Boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.createCard('#000000');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentParent) {
      this.setSelect(changes.currentParent.currentValue);
    }
  }

  ngOnInit() {
    this.fractionValue = this.currentParent.numerator / this.currentParent.denominator;
  }

  selectCard(factors: Fraction) {
    this.cardSelectedEmiter.emit(factors);
  }

  checkEquivalence(fraction: Fraction) {
    const currentValue = fraction.numerator / fraction.denominator;
    if (this.fractionValue === currentValue) {
      this.correct = true;
      this.createCard('#008000');
    } else {
      this.createCard('#ff0000');
    }
  }

  createCard(color: any) {
    const canvas = this.line.nativeElement;
    this.context = canvas.getContext('2d');
    this.context.fillStyle = color; // sets the color of the numbers
    this.context.strokeStyle = color; // sets the color of the line

    this.context.font = '48px serif';
    this.context.fillText(this.cardData.numerator.toString(), canvas.width - (canvas.width * .7), canvas.height / 3);

    this.context.beginPath();
    this.context.moveTo(0, canvas.height / 2); // starting point
    this.context.lineTo( (canvas.width - (canvas.width / 3.5)), canvas.height / 2); // end point
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.fillText(this.cardData.denominator.toString(), canvas.width - (canvas.width * .7), canvas.height - (canvas.height / 7));
  }

  setSelect(data: any) {
    const currentParent: Fraction = new Fraction;
    currentParent.numerator = data.numerator;
    currentParent.denominator = data.denominator;
    if ((currentParent.numerator === this.cardData.numerator) && (currentParent.denominator === this.cardData.denominator)) {
      this.selected = true;
      this.createCard('#20bb20');
    } else {
      this.selected = false;
      this.createCard('#000000');
    }
  }

}
