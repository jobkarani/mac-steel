import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mac Steel | Kenya';
  isloading$=new BehaviorSubject<boolean>(false);

  constructor(private meta: Meta){}

  ngOnInit(){

    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);

    this.meta.addTags([ 
      { name: 'description', content: 'Mac Steel | Kenya' }, 
      { name: 'keywords', content: '' } 
    ]);
  }
}
