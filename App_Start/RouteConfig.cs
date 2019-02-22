using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Vanilla.Web.UI
{
    public class RouteConfig
    {

        private static Route AddRoute(RouteCollection routes, string name, string routeUrl, object parameters)
        {
            return AddRoute(routes, name, routeUrl, parameters, null);

        }

        private static Route AddRoute(RouteCollection routes, string name, string routeUrl, object parameters, Action<RequestContext> additionalProcessing)
        {
            var handler = new RewriteHandler(additionalProcessing);

            RouteValueDictionary _routeValueDictionary = new RouteValueDictionary(parameters);
            Route _route = new Route(routeUrl, _routeValueDictionary, handler);

            // routes.Add(name + "Globalised", new GlobalisedRoute(_route.Url, _route.Defaults, additionalProcessing));
            routes.Add(name, _route);
            return _route;
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            AddRoute(routes, "Index", "", new { controller = "Page", action = "Index" });

            AddRoute(routes, "Fallback", "{controller}/{action}/{id}", new { id = UrlParameter.Optional });

        }

        public class RewriteHandler : MvcRouteHandler
        {

            private Action<RequestContext> _additional;

            public RewriteHandler(Action<RequestContext> additionalProcessing)
                : base()
            {
                _additional = additionalProcessing;
            }

            protected override IHttpHandler GetHttpHandler(RequestContext requestContext)
            {
                if (_additional != null)
                    _additional(requestContext);
                return base.GetHttpHandler(requestContext);
            }
        }
    }
}
