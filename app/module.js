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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var restaurant_item_component_1 = require('./restaurant-item/restaurant-item.component');
var application_component_1 = require('./application/application.component');
var menubar_component_1 = require('./menubar/menubar.component');
var footer_component_1 = require('./footer/footer.component');
var city_selector_component_1 = require('./city-selector/city-selector.component');
var restaurant_selector_component_1 = require('./restaurant-selector/restaurant-selector.component');
var dublin_component_1 = require('./restaurant-selector/dublin/dublin.component');
var meath_component_1 = require('./restaurant-selector/meath/meath.component');
var kildare_component_1 = require('./restaurant-selector/kildare/kildare.component');
var score_component_1 = require('./score/score.component');
var home_component_1 = require('./home/home.component');
var restaurant_details_component_1 = require('./restaurant-details/restaurant-details.component');
var review_component_1 = require('./review/review.component');
var review_item_component_1 = require('./review-item/review-item.component');
var top_rated_component_1 = require('./top-rated/top-rated.component');
var quisine_component_1 = require('./quisine/quisine.component');
var search_component_1 = require('./search/search.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.default },
                    { path: 'home', component: home_component_1.default },
                    { path: 'dublin', component: dublin_component_1.default },
                    { path: 'meath', component: meath_component_1.default },
                    { path: 'kildare', component: kildare_component_1.default },
                    { path: 'restaurant-details/:id', component: restaurant_details_component_1.default },
                    { path: 'top-rated', component: top_rated_component_1.default },
                    { path: 'quisine', component: quisine_component_1.default },
                    { path: 'search/:name', component: search_component_1.default },
                    { path: '**', component: home_component_1.default }
                ])],
            declarations: [application_component_1.default, menubar_component_1.default, footer_component_1.default, city_selector_component_1.default, restaurant_selector_component_1.default, dublin_component_1.default, meath_component_1.default, kildare_component_1.default, restaurant_item_component_1.default, score_component_1.default, home_component_1.default, restaurant_details_component_1.default, review_component_1.default, review_item_component_1.default, top_rated_component_1.default, quisine_component_1.default, search_component_1.default],
            bootstrap: [application_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=module.js.map