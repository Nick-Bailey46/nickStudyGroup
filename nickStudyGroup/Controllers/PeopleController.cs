using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace nickStudyGroup.Controllers
{
    public class PeopleController : Controller
    {
        // GET: People
        public ActionResult ListPeople()
        {
            List<Models.PersonModel> people = new List<Models.PersonModel>();

            people.Add(new Models.PersonModel { StudentNumber = "u24671691", FirstName = "Nicholas", LastName = "Bailey",
                                                Email = "u24671691@tuks.co.za", myLink = "~/HTML/Nicholas.html"});
            people.Add(new Models.PersonModel { StudentNumber = "u24661092", FirstName = "Christopher", LastName = "Bailey",
                                                Email = "u24661092@tuks.co.za", myLink = "~/HTML/Christopher.html"});
            people.Add(new Models.PersonModel { StudentNumber = "u24464201", FirstName = "Barry", LastName = "Allen",
                                                Email = "u24464201@tuks.co.za", myLink = "~/HTML/Barry.html"});
            people.Add(new Models.PersonModel { StudentNumber = "u24697774", FirstName = "Cleetus", LastName = "Mcfarland",
                                                Email = "u24697774@tuks.co.za", myLink = "~/HTML/Cleetus.html"});
            people.Add(new Models.PersonModel { StudentNumber = "u24847225", FirstName = "Dwayne", LastName = "Johnson",
                                                Email = "u24847225@tuks.co.za", myLink = "~/HTML/Dwayne.html"});
            return View(people);
        }
    }
}