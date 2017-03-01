import { Injectable, EventEmitter } from '@angular/core';
import { ChatMessage } from '../models/ChatMessage';


declare var $: any;


@Injectable()
export class SignalRService {

	private proxy: any;
	private proxyName: string = 'chatHub';
	private connection: any;
	public connectionId: string;

	public connectionExists: Boolean;
	public connectionEstablished: EventEmitter<Boolean>;

	// TODO: ADD TO MODULE!!! AND IMPORT JQUERY AND MAYBE EVEN SIGNALR NICER!+

	public messageReceived: EventEmitter<ChatMessage>;

	constructor() {		

		this.connectionEstablished = new EventEmitter<Boolean>();

		this.messageReceived = new EventEmitter<ChatMessage>();
		this.connectionExists = false;

		this.connection = $.hubConnection('http://localhost:58056/' + 'signalr/');
		this.proxy = this.connection.createHubProxy(this.proxyName);

		this.registerOnServerEvents();

		this.startConnection();
	}

	public sendChatMessage(message: ChatMessage) {
		this.proxy.invoke('SendFromAngular', this.connectionId, message);
	}

	private startConnection(): void {
		this.connection.start().done((data: any) => {
			console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
			this.connectionId = data.id;
			this.connectionEstablished.emit(true);
			this.connectionExists = true;
		}).fail((error: any) => {
			console.log('Could not connect ' + error);
			this.connectionEstablished.emit(false);
		});
	}

	private registerOnServerEvents(): void {

		this.proxy.on('SendMessage', (data: ChatMessage) => {
			console.log('received in SignalRService: ' + JSON.stringify(data));
			this.messageReceived.emit(data);
		});
	}
}