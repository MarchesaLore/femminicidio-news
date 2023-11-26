import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UltimeService } from './ultime.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ultima-slider',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  templateUrl: './ultima-slider.component.html',
  styleUrl: './ultima-slider.component.scss'
})
export class UltimaSliderComponent {
  slides: any[] = [];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, dragging: true,swipeToSlide: true, infinite: false, dots: true, responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }
  ]};

  constructor(private ultimeService: UltimeService) {}

  ngOnInit() {

   
    
    
    this.ultimeService.getUltime().subscribe(data => {
      this.slides = data.map(item => {
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
