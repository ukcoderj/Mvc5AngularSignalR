import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

import { SignalRService } from './services/signalr.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		ChatComponent,
		TestComponent,
		Test2Component
	],
	providers: [
		SignalRService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
