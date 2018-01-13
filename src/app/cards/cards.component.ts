import { Component, OnInit } from '@angular/core';
import { Card } from '../Card'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Card[]>('http://www.clashapi.xyz/api/cards').subscribe(data => {
      // Read the result field from the JSON response.
      console.log();
      this.cards = data;
    });
  }

}
