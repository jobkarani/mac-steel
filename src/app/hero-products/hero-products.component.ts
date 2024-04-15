import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-products',
  templateUrl: './hero-products.component.html',
  styleUrls: ['./hero-products.component.css']
})
export class HeroProductsComponent {
  constructor(private meta: Meta){}
  
  ngOnInit(){
    this.meta.addTags([ 
      { name: 'description', content: 'Mac Steel' }, 
      { name: 'keywords', content: 'Chuma,steel, Scrap, Waste disposal, Copper, Dawa, Brass, Light Iron, Stainless steel, Scrap metal dealers in Nairobi, Nairobi Scrap, Selling scrap' } 
    ]);
  }
}
