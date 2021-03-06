"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../components/heroes/heroes.component');
var hero_detail_component_1 = require('../components/heroes/hero/hero-detail.component');
var dashboard_component_1 = require('../components/dashboard/dashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map