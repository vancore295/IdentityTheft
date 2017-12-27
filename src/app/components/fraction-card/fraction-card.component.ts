import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, } from '@angular/core';
import { CardService } from '../../services/card-service/card.service';
import { Subscription } from 'rxjs/Subscription';
import { Fraction } from '../../classes/fraction';

@Component({
  selector: 'app-fraction-card',
  templateUrl: './fraction-card.component.html',
  styleUrls: ['./fraction-card.component.css']
})
export class FractionCardComponent implements OnInit {
  context: CanvasRenderingContext2D;
  @Input() cardData: Fraction;
  @ViewChild('myCanvas') line;
  @Output() cardSelectedEmiter = new EventEmitter<Fraction>();

  factors; any;
  subscription: Subscription;


  ngAfterViewInit(): void {
    const canvas = this.line.nativeElement;
    this.context = canvas.getContext('2d');

    this.context.font = '48px serif';
    this.context.fillText(this.cardData.numerator.toString(), canvas.width - (canvas.width * .7), canvas.height / 3);

    this.context.beginPath();
    this.context.moveTo(0, canvas.height / 2); // starting point
    this.context.lineTo( (canvas.width - (canvas.width / 3.5)), canvas.height / 2); // end point
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.fillText(this.cardData.denominator.toString(), canvas.width - (canvas.width * .7), canvas.height - (canvas.height / 7));
  }

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

   selectCard(factors: Fraction) {
    this.cardSelectedEmiter.emit(factors);
  }


}
