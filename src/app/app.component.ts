import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2'; // must be injected to constructor
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cuisines; //= ['c1', 'c2', 'c3']
  //private subscription;

  constructor(private af: AngularFire){
    //console.log(af);
    
  }
  ngOnInit(){
    this.cuisines = this.af.database.list('/cuisines'); //node of database - now a firebase list observable      
  }
  // ngOnDestroy(){ // dont need this if using | async in html
  //   this.subscription.unsubscribe();
  // }
}
