import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'sb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }
}
