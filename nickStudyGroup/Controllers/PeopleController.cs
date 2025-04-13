using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using nickStudyGroup.Models;

namespace nickStudyGroup.Controllers
{
    public class PeopleController : Controller
    {
        // GET: People
        private static List<Models.PersonModel> people = new List<Models.PersonModel>();
        public ActionResult ListPeople()
        {
            if (people.Count == 0) {
                people.Add(new Models.PersonModel { StudentNumber = "u24671691", FirstName = "Nicholas", LastName = "Bailey",
                    Email = "u24671691@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24661092", FirstName = "Christopher", LastName = "Bailey",
                    Email = "u24661092@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24464201", FirstName = "Barry", LastName = "Allen",
                    Email = "u24464201@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24697774", FirstName = "Cleetus", LastName = "Mcfarland",
                    Email = "u24697774@tuks.co.za" });
                people.Add(new Models.PersonModel { StudentNumber = "u24847225", FirstName = "Dwayne", LastName = "Johnson",
                    Email = "u24847225@tuks.co.za" });
            }
            return View(people);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View("Create");
        }

        public ActionResult Create(PersonModel pm)
        {
            people.Add(new Models.PersonModel { StudentNumber = pm.StudentNumber, FirstName = pm.FirstName,
                                                LastName = pm.LastName, Email = pm.Email });

            return RedirectToAction("ListPeople");
        }
    }
}