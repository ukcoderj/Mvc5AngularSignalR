using System.Web;
using System.Web.Mvc;

namespace Mvc5Angular2SignalR
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
