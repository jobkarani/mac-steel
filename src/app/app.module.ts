import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-page/home.component';
import { HeroComponent } from './hero-home/hero.component';
import { PartnerComponent } from './partner/partner.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    HeroAboutComponent,
    PartnerComponent,
    BenefitsComponent,
    ProductsComponent,
    FooterComponent,
    AboutPageComponent,
    MissionVisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
