﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Vanilla.Web.UI.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return View();
        }
    }
}