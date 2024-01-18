import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProductsComponent } from './hero-products.component';

describe('HeroProductsComponent', () => {
  let component: HeroProductsComponent;
  let fixture: ComponentFixture<HeroProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
