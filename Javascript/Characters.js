
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prevbtn");
const nextButton = document.getElementById("nextbtn");
const pageLinks = pagination.querySelectorAll("a");
var mobile = window.matchMedia("(max-width: 600px)")
let currentPage = 1;

function openNav() {
    if (mobile.matches) {
        document.getElementById("mySidepanel").style.width = "100%";
    } else {
        document.getElementById("mySidepanel").style.width = "32vw";
    }
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
        .then(content => {
            const currentPageData = content.ID.Currentpage[pageNumber.toString()];

            artboxes.forEach((box, index) => {
                if (index < itemsPerPage) {
                    const imgboxKey = "boximg-" + (index + 1);
                    const creditvalue = currentPageData[imgboxKey]["credit-required"];
                    const creatorlink = currentPageData[imgboxKey]["href"];
                    var hyperlink = box.querySelector('.hyperlinkbox');
                    if (currentPageData.hasOwnProperty(imgboxKey)) {
                        const backgroundImage = currentPageData[imgboxKey]["background-image"];
                        const backgroundPosition = currentPageData[imgboxKey]["background-position"];
                        const backgroundSize = currentPageData[imgboxKey]["background-size"];
                        box.style.background = `url(${backgroundImage})` + `${backgroundPosition}` + '/' + `${backgroundSize}`;
                        hyperlink.setAttribute("href", `${backgroundImage}`);
                    } else {
                        hyperlink.setAttribute("href", `UNDEFINED`);
                        box.style.background = "none";
                    }
                    if (creditvalue === 0 && box.parentElement.querySelector('.textcontainer')) {
                        const remove = box.parentElement.querySelector('.textcontainer')
                        box.parentElement.removeChild(remove);
                    } else if (creditvalue === 1 && !box.parentElement.querySelector('.textcontainer')) {
                        const txtcontainer = document.createElement('div');
                        box.parentElement.appendChild(txtcontainer);
                        txtcontainer.classList.add('textcontainer');
                        const creditlink = document.createElement('a');
                        creditlink.classList.add('textalign');
                        creditlink.setAttribute("href", `${creatorlink}`)
                        txtcontainer.appendChild(creditlink);
                        creditlink.textContent = "Credit";
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