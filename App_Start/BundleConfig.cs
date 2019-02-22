using System.Web;
using System.Web.Optimization;

namespace Vanilla.Web.UI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/css").Include(
                        "~/Content/plugins/flickity/flickity.css",
                        "~/Content/plugins/aos/aos.css",
                        "~/Content/css/styles.css"));

            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                      "~/Content/js/jquery.js",
                      "~/Content/plugins/flickity/flickity.pkgd.min.js",
                      "~/Content/plugins/packery/packery.pkgd.min.js",
                      "~/Content/plugins/aos/aos.js",
                      "~/Content/plugins/object-fit-polyfill/objectFitPolyfill.basic.min.js",
                      "~/Content/js/scripts--generic.js",
                      "~/Content/js/scripts--sepcific.js"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));
        }
    }
}
