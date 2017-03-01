using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Mvc5Angular2SignalR.Models
{
	public class ChatMessage
	{
		public string Message { get; set; }
		public DateTime Sent { get; set; }
	}
}