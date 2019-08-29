import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  @Input() modaltitle: string;

  constructor() { }

  ngOnInit() {
  }

}
