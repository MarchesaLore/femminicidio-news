import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimeService } from '../ultima-slider/ultime.service';
import { IUltima } from '../ultima-slider/ultima';

@Component({
  selector: 'app-vittime-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vittime-cards.component.html',
  styleUrl: './vittime-cards.component.scss'
})
export class VittimeCardsComponent {
  cards: IUltima[] = [];

  constructor(private ultimeService: UltimeService) {}

  ngOnInit() {
    this.ultimeService.getUltime().subscribe(data => {
      this.cards = data.map(item => {
        let imgurl ='';
        if(item.image != ''){
          imgurl = "./assets/women/"+ item.image;
        }
        return {
          name: item.name,
          date: item.date,
          age: item.age,
          location: item.location,
          image: imgurl
        };
      });
    });
  }
    
  }

