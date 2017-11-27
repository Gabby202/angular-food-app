import {Component, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../../restaurant-service/restaurant-service';

@Component({
   moduleId: module.id,
    selector: 'dublin-resturaunts',
    templateUrl: 'dublin.component.html',
    styleUrls:  ['dublin.component.css']
})
export default class DublinComponent implements OnInit{

    restaurants: Array<Restaurant> = [];
    tempRestaurants: Array<Restaurant> = [];

    constructor() {
        let restaurantService = new RestaurantService();
        this.restaurants = restaurantService.getRestaurants();

    }

    ngOnInit() {
      for(var i = 0; i < this.restaurants.length; i++) {
        if(this.restaurants[i].county == "Dublin") {
          this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

    filter(filterValue: string): void {
      console.log(filterValue);
      this.tempRestaurants.length = 0;
      for(var i = 0; i<this.restaurants.length; i++){
        if(this.restaurants[i].city == filterValue){
            this.tempRestaurants.push(this.restaurants[i]);
        }
      }
    }

}
