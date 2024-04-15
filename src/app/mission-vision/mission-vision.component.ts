import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissionVisionComponent {
  constructor(private meta: Meta){}
  
  ngOnInit(){
    this.meta.addTags([ 
      { name: 'description', content: 'Mac Steel' }, 
      { name: 'keywords', content: 'Chuma,steel, Scrap, Waste disposal, Copper, Dawa, Brass, Light Iron, Stainless steel, Scrap metal dealers in Nairobi, Nairobi Scrap, Selling scrap' } 
    ]);
  }
}
