import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutPageComponent},
  {path:'products',component:ProductsPageComponent},
  {path:'contact',component:ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
