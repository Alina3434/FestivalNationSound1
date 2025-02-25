using Microsoft.AspNetCore.Mvc;

namespace FestivalNationSound.Controllers
{
    public class ConcertController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
           
        public IActionResult programme()
        {
            return View();
        }
           
        public IActionResult planning()
        {
            return View();
        }
        public IActionResult artiste(string id)
        {
            ViewBag.id = id;
            return View();
        }


    }
}

