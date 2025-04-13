document.addEventListener("DOMContentLoaded", function () {

    // === NAV LINK HIGHLIGHTING ===
    let currentPath = window.location.pathname.toLowerCase();
    document.querySelectorAll(".nav-link").forEach(link => {
        let href = link.getAttribute("href").toLowerCase();
        if (currentPath.includes(href)) {
            link.classList.add("active");
        }
    });

    // === HIGHLIGHT FIRST NAMES STARTING WITH "B" ===
    const rows = document.querySelectorAll("#Study-buddies tr");
    rows.forEach(row => {
        const firstNameCell = row.querySelector(".first-name");
        if (firstNameCell) {
            const firstName = firstNameCell.textContent.trim();
            if (firstName.charAt(0).toUpperCase() === "B") {
                row.style.color = "red";
            }
        }
    });

    // === SEARCH FUNCTION ===
    const searchBtn = document.querySelector(".searchBtn");

    if (searchBtn) {
        searchBtn.addEventListener("click", function () {
            const input = document.getElementById("searchInput").value.toLowerCase();
            const rows = document.querySelectorAll("#Study-buddies tr");

            // Loop through table rows (skip the header row)
            for (let i = 1; i < rows.length; i++) {
                const firstNameCell = rows[i].querySelector(".first-name");

                if (firstNameCell) {
                    const name = firstNameCell.textContent.toLowerCase();

                    if (input && name.includes(input)) {
                        // Highlight match in red
                        rows[i].style.color = "red";

                        // Remove color after 3 seconds
                        setTimeout(() => {
                            rows[i].style.color = "";
                        }, 3000);
                    }
                }
            }
        });
    }

    // === DELETE BUTTON FUNCTIONALITY ===
    const deleteButtons = document.querySelectorAll(".btn-danger");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this record?")) {
                const row = button.closest("tr");
                row.remove();
            }
        });
    });

    // ====== Save Button ======
    const saveBtn = document.querySelector(".saveBtn");

    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            const table = document.getElementById("Study-buddies");
            let tableData = "";

            for (let i = 1; i < table.rows.length; i++) { // skip header
                let row = table.rows[i];
                for (let j = 0; j < 4; j++) {
                    tableData += row.cells[j].innerText + "|";
                }
                tableData += "\n";
            }

            localStorage.setItem("peopleTable", tableData);
            alert("Table saved to local storage.");
        });
    }

    // ====== Retrieve Button ======
    const retrieveBtn = document.querySelector(".retrieveBtn");

    if (retrieveBtn) {
        retrieveBtn.addEventListener("click", function () {
            const data = localStorage.getItem("peopleTable");

            if (!data) {
                alert("No data found in local storage.");
                return;
            }

            const tableBody = document.getElementById("Study-buddies");

            // Remove old rows (keep header)
            while (tableBody.rows.length > 1) {
                tableBody.deleteRow(1);
            }

            const rows = data.trim().split("\n");
            rows.forEach(rowStr => {
                const values = rowStr.split("|");

                const newRow = tableBody.insertRow();
                newRow.innerHTML = `
                <td>${values[0]}</td>
                <td class="first-name">${values[1]}</td>
                <td>${values[2]}</td>
                <td>${values[3]}</td>
                <td><button type="button" class="btn btn-danger deleteBtn">Delete</button></td>
            `;
            });

            // Rebind delete functionality
            document.querySelectorAll(".deleteBtn").forEach(button => {
                button.addEventListener("click", function () {
                    if (confirm("Are you sure you want to delete this record?")) {
                        const row = button.closest("tr");
                        row.remove();
                    }
                });
            });

            alert("Table loaded from local storage.");
        });
    }

    // ====== Clear Button ======
    const clearBtn = document.querySelector(".clearBtn");

    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            localStorage.removeItem("peopleTable");
            alert("Local storage cleared.");
        });
    }

    // === TAB FUNCTIONALITY ===
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle tab switching
    function switchTab(target) {
        // Hide all tab content
        tabContents.forEach(content => content.classList.remove('active'));

        // Remove the 'active' class from all buttons
        tabButtons.forEach(button => button.classList.remove('active'));

        // Show the content that corresponds to the clicked tab
        const targetContent = document.querySelector(target);
        if (targetContent) {
            targetContent.classList.add('active');  // Show the content
        }

        // Add 'active' class to the clicked tab button
        const activeButton = document.querySelector(`[data-target="${target}"]`);
        if (activeButton) {
            activeButton.classList.add('active');  // Highlight the active tab
        }
    }

    // Add event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the target content ID from the button's data-target attribute
            const target = button.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Set the default tab (first one) if there are any tab buttons
    if (tabButtons.length > 0) {
        tabButtons[0].click(); // Automatically trigger the first tab
    }

});