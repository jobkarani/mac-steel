import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-downloadables',
  templateUrl: './downloadables.component.html',
  styleUrls: ['./downloadables.component.css']
})
export class DownloadablesComponent {
  constructor(private meta: Meta){}
  
  ngOnInit(){
    this.meta.addTags([ 
      { name: 'description', content: 'Mac Steel' }, 
      { name: 'keywords', content: 'Chuma,steel, Scrap, Waste disposal, Copper, Dawa, Brass, Light Iron, Stainless steel, Scrap metal dealers in Nairobi, Nairobi Scrap, Selling scrap' } 
    ]);
  }
}
