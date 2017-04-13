using System.Web;
using System.Web.Mvc;

namespace Crafty
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new AddCustomHeaderFilter());
        }
    }
    public class AddCustomHeaderFilter : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            actionExecutedContext.HttpContext.Response.AppendHeader("Access-Control-Allow-Origin", "*");
        }
    }
}