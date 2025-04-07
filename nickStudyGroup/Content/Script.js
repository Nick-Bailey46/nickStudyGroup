document.addEventListener("DOMContentLoaded", function () {

    let currentPath = window.location.pathname;

    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
function deleteRow(button) {
  
    var row = button.closest('tr');

    if (confirm('Are you sure you want to delete this record?')) {
        row.remove();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    var rows = document.querySelectorAll("#Study-buddies tr");

    rows.forEach(function (row) {
        
        var firstNameCell = row.querySelector(".first-name");

        if (firstNameCell) {
            var firstName = firstNameCell.textContent.trim(); 

           
            if (firstName.charAt(0).toUpperCase() === "B") {
                row.style.color = "red";
            }
        }
    });
});