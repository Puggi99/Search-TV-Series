import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/models/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() anime?: Anime
}
