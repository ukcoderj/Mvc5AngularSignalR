import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		TestComponent,
		Test2Component
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
