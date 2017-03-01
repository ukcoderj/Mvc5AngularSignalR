"use strict";
var router_1 = require('@angular/router');
var test_component_1 = require('./components/test/test.component');
var test2_component_1 = require('./components/test2/test2.component');
var appRoutes = [
    { path: 'test', component: test_component_1.TestComponent },
    { path: 'test2', component: test2_component_1.Test2Component },
    { path: '', redirectTo: '/test', pathMatch: 'full' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map