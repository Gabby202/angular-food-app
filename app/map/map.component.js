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
var MapComponent = (function () {
    function MapComponent() {
        this.lat = -32.9477132;
        this.lng = -60.630465800000025;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: 'map.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MapComponent;
//# sourceMappingURL=map.component.js.map