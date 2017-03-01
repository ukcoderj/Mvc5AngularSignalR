using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Mvc5Angular2SignalR.Models;

namespace Mvc5Angular2SignalR.Hubs
{
	[HubName("chatHub")]
	public class ChatHub : Hub
	{
		/// <summary>
		/// MVC Version
		/// </summary>
		/// <param name="name"></param>
		/// <param name="message"></param>
		public void Send(string name, string message)
		{
			// Call the addNewMessageToPage method to update clients.
			Clients.All.addNewMessageToPage(name, message);
		}


		/// <summary>
		/// Angular version.
		/// </summary>
		/// <param name="who"></param>
		/// <param name="chatMessage"></param>
		public void SendFromAngular(string who, ChatMessage chatMessage)
		{
			Clients.All.SendMessage(chatMessage);
		}
	}
}