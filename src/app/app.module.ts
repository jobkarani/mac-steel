import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-page/home.component';
import { HeroComponent } from './hero-home/hero.component';
import { PartnerComponent } from './partner/partner.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HomeProductsComponent } from './home-products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { HeroProductsComponent } from './hero-products/hero-products.component';
import { DownloadablesComponent } from './downloadables/downloadables.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    HeroAboutComponent,
    PartnerComponent,
    BenefitsComponent,
    HomeProductsComponent,
    FooterComponent,
    AboutPageComponent,
    MissionVisionComponent,
    ProductsPageComponent,
    HeroProductsComponent,
    DownloadablesComponent,
    ProductsListComponent,
    ContactPageComponent,
    ContactFormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
