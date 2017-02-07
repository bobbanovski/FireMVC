import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; // must be injected to constructor - fb - explicitly set type
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //render a list
  cuisines: FirebaseListObservable<any[]>; //= ['c1', 'c2', 'c3']
  //render an object
  restaurant;
  restaurantAddress;

  constructor(private af: AngularFire){
    //console.log(af);
    
  }
  ngOnInit(){
    this.cuisines = this.af.database.list('/cuisines'); //node of database - now a firebase list observable    
    this.restaurant = this.af.database.object('/restaurant');
    console.log(this.restaurant);
  }
  // ngOnDestroy(){ // dont need this if using | async in html
  //   this.subscription.unsubscribe();
  // }
  add(){
    this.cuisines.push({
      name: 'Mexican',
      details: {
        description: '...'
      }
    })
  }
  update(){
    // this.af.database.object('/restaurant').update({ // nondestructive update
    //   name: 'New Name',
    //   rating: 5
    // })
    this.af.database.object('/restaurant').set({ // overrides object at this point
      name: 'New Name',
      rating: 6
    })
    //this.af.database.object('/favorites/1/10').set(true)
    //this.af.database.object('/favorites/1/10').set(null) // deletes the above entry
    // can be used to delete specific entries
  }
  remove(){
    this.af.database.object('restaurant').remove() //promise, notifies when completed
      .then(x => console.log("Successfully deleted"))
      .catch(error => console.log("error in item deletion", error))
  }  
}
