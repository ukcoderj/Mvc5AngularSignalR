import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';


const appRoutes: Routes = [
	{ path: 'test', component: TestComponent },
	{ path: 'test2', component: Test2Component },
	{ path: '', redirectTo: '/test', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });