using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Resposive_Bootstrap.Models;

namespace Resposive_Bootstrap.Controllers
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

        [HttpPost]
        public IActionResult GuardarPaciente()
        {
            List<Object> pacientes = new List<Object>();

            for (int i = 0; i < 400; i ++)
            {
                pacientes.Add(new { Id = Guid.NewGuid(), Nombre = "Alfredo", ApellidoPaterno = "Sánchez", ApellidoMaterno = "Verduzco" });
            }
       
           
            return Json(pacientes);
        }

        public IActionResult Privacy()
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