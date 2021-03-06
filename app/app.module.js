/*
This is the entry point to your application.
Since the QuickStart application is a web application that runs in a browser,
 your root module needs to import the BrowserModule from @angular/platform-browser to the imports array.
This is the smallest amount of Angular that is needed for a minimal application to run in the browser.
*/
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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./components/app/app.component');
var heroes_component_1 = require('./components/heroes/heroes.component');
var hero_detail_component_1 = require('./components/heroes/hero/hero-detail.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var hero_service_1 = require('./services/hero.service');
var app_routing_1 = require('./routing/app.routing');
//in declarations inserisco i moduli di cui ho bisogno
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, heroes_component_1.HeroesComponent, hero_detail_component_1.HeroDetailComponent, dashboard_component_1.DashboardComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [hero_service_1.HeroService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map