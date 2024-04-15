import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductResponse } from '../interfaces/product';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  product:ProductResponse[] = [];
  phonenumber: number = 254740030111;
  id:number = 0;

  constructor(private http:HttpClient, private meta: Meta) {}
  ngOnInit(){

      this.http.get<ProductResponse[]>("https://mac-stl-api-production.up.railway.app/api_products/").subscribe(

      data => {
        this.product = data
      }
    );

    this.meta.addTags([ 
      { name: 'description', content: 'Mac Steel' }, 
      { name: 'keywords', content: 'Chuma,steel, Scrap, Waste disposal, Copper, Dawa, Brass, Light Iron, Stainless steel, Scrap metal dealers in Nairobi, Nairobi Scrap, Selling scrap' } 
    ]);
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20sell%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Sell:*%20${this.product[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.product[index].price}/Kg*%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.macsteel.com/products/${this.product[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
