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
var router_1 = require('@angular/router');
var restaurant_service_1 = require('../restaurant-service/restaurant-service');
var SearchComponent = (function () {
    function SearchComponent(route) {
        this.route = route;
        this.restaurants = [];
        var restaurantService = new restaurant_service_1.RestaurantService();
        this.restaurants = restaurantService.getRestaurants();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.name = params['name']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html',
            styleUrls: ['search.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], SearchComponent);
    return SearchComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchComponent;
//# sourceMappingURL=search.component.js.map