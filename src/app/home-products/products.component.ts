import { Component } from '@angular/core';
import { HomeProductsService } from '../services/home-products.service';
import { ProductResponse } from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class HomeProductsComponent {
  constructor(private homeproductsService: HomeProductsService) { }

  product: ProductResponse[] = [];
  phonenumber: number = 254740030111;

  ngOnInit(): void {
    this.homeproductsService.getProductsToHome().subscribe(data => {
      this.product = data;
    });
  }

  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.product[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.product[index].price}/Kg*%0A%20%20%20%20%20%20%20%20*URL:*%20https://www.ahericare.com/shop/product-details/${this.product[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
