import { Component, Input, OnChanges } from '@angular/core';
import { CardModel } from './model/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  @Input() config!: CardModel;

  ngOnChanges(): void {
    console.log(this.config);
  }
}
