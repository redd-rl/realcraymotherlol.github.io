
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prevbtn");
const nextButton = document.getElementById("nextbtn");
const pageLinks = pagination.querySelectorAll("a");

const itemsPerPage = 21;
let currentPage = 1;

function openNav() {
    document.getElementById("mySidepanel").style.width = "32rem";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function displayItemsForPage(pageNumber) {
    const artboxes = document.querySelectorAll(".chrbox");
    artboxes.forEach((box, index) => {
        if (index >= (pageNumber - 1) * itemsPerPage && index < pageNumber * itemsPerPage) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

displayItemsForPage(currentPage);

function navigateToPage(pageNumber) {
    currentPage = pageNumber;
    displayItemsForPage(currentPage);

    pageLinks.forEach((link, index) => {
        if (index === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPage > 1) {
        navigateToPage(currentPage - 1);
    }
});

nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPage < pageLinks.length - 2) {
        navigateToPage(currentPage + 1);
    }
});


pageLinks.forEach((link, index) => {
    if (index !== 0 && index !== pageLinks.length - 1) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            navigateToPage(index);
        });
    }
});