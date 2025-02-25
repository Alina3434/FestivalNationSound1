using Microsoft.AspNetCore.Mvc;

namespace FestivalNationSound.Controllers
{
    public class CarteController : Controller
    {
        public IActionResult carte()
        {
            return View();
        }
    }
}
