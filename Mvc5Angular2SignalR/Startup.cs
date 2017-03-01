using System;
using Owin;
using Microsoft.Owin;
[assembly: OwinStartup(typeof(Mvc5Angular2SignalR.Startup))]
namespace Mvc5Angular2SignalR
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			// Any connection or hub wire up and configuration should go here
			app.MapSignalR();
		}
	}
}