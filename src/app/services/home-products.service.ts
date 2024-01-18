import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from '../interfaces/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {

  constructor(private http: HttpClient) {}

  getProductsToHome() {
    return this.http.get<ProductResponse[]>('https://mac-stl-api-production.up.railway.app/api_products/').pipe(
      map(products => this.getRandomProducts(products, 2))
    );
  }

  getRandomProducts(products: ProductResponse[], count: number): ProductResponse[] {
    const randomProducts: ProductResponse[] = [];
    const maxIndex = products.length - 1;
  
    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const product = products[randomIndex];
      if (!randomProducts.includes(product)) {
        randomProducts.push(product);
      }
    }
      
    return randomProducts;
  }
}
