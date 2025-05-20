using FestivalNationSound.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace FestivalNationSound.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Manger()
        {
            return View();
;        }

        public IActionResult Stationner()
        {
            return View();
        }

        public IActionResult Venir()
        {
            return View();
        }

        public IActionResult Dormir()
        {
            return View();
        }

        public IActionResult contact()
        {
            return View();
        }
        public IActionResult FAQ()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}