"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restaurant_service_1 = require('../../restaurant-service/restaurant-service');
var MeathComponent = (function () {
    function MeathComponent() {
        this.restaurants = [];
        this.tempRestaurants = [];
        var restaurantService = new restaurant_service_1.RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
    }
    MeathComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].county == "Meath") {
                this.tempRestaurants.push(this.restaurants[i]);
            }
        }
    };
    MeathComponent.prototype.filter = function (filterValue) {
        console.log(filterValue);
        this.tempRestaurants.length = 0;
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].city == filterValue) {
                this.tempRestaurants.push(this.restaurants[i]);
            }
        }
    };
    MeathComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'meath-resturaunts',
            templateUrl: 'meath.component.html',
            styleUrls: ['meath.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MeathComponent);
    return MeathComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MeathComponent;
//# sourceMappingURL=meath.component.js.map