
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prevbtn");
const nextButton = document.getElementById("nextbtn");
const pageLinks = pagination.querySelectorAll("a");
let currentPage = 1;

function openNav() {
    document.getElementById("mySidepanel").style.width = "32rem";
    document.getElementById("mySidepanel").style.borderLeft = "5px solid rgb(175, 118, 11)";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.borderLeft = "0px solid rgb(175, 118, 11)";
}

function displayItemsForPage(pageNumber) {
    const artboxes = document.querySelectorAll(".boximg");
    const itemsPerPage = 21;

    fetch('https://realcraymotherlol.github.io/JSON/paginationbowtop.json')
        .then(response => response.json())
        .then(data => {
            const currentPageData = data.ID.Currentpage[pageNumber.toString()];

            artboxes.forEach((box, index) => {
                if (index < itemsPerPage) {
                    const imgboxKey = "boximg-" + (index + 1);
                    const creditvalue = currentPageData[imgboxKey]["credit-required"];
                    if (creditvalue === 1) {
                        const textcontainer = document.createElement('div');
                        textcontainer.appendChild(box);
                    }
                    if (currentPageData.hasOwnProperty(imgboxKey)) {
                        const backgroundImage = currentPageData[imgboxKey]["background-image"];
                        const backgroundPosition = currentPageData[imgboxKey]["background-position"];
                        const backgroundSize = currentPageData[imgboxKey]["background-size"];
                        box.style.background = `url(${backgroundImage})` + `${backgroundPosition}` + '/' + `${backgroundSize}`;
                    } else {
                        box.style.background = "none";
                    }
                } else {
                    box.style.background = "none";
                }
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
}

displayItemsForPage(1);


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