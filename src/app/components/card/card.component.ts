import { Component, OnInit, Input, Output } from '@angular/core';
import { ShowDetailsComponent } from "../show-details/show-details.component"
import { MatDialog } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData;
  @Output() messageEvent = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }


  showDetails() {
    this.messageEvent.emit(this.cardData);
  }
  
}
