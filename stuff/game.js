var originalJA3gridWidth;
var originalJA3gridHeight;
var originalJA3gridBackgroundPosition;
var currentZoomedGrid = null;

function zoom(contentId){
  var grid = document.getElementById("GRID-" + contentId);
  var background = document.getElementById("GRIDB-" + contentId);
  var logo = document.getElementById("LOGO-" + contentId);
  var mobile = window.matchMedia("(max-width: 600px)")
  var year = document.getElementById("YEAR-" + contentId);
  

if (!(document.getElementById("GRID-" + contentId).classList.contains("selected"))) {
    grid.style.width = "41vh"
    grid.style.height = "400px";
    originalJA3gridWidth = grid.style.width;
    originalJA3gridHeight = grid.style.height;
    originalJA3gridBackgroundPosition = background.style.backgroundPosition;

    grid.style.cursor = "auto";
  
    if (currentZoomedGrid !== null) {
      RevertZoom(currentZoomedGrid);
    }
  
    currentZoomedGrid = contentId;
    switch (contentId) {
      case 1:
          background.style.backgroundPosition = "100px";
          const dese1 = document.createElement("div");
          const downbtn1 = document.createElement("button");
      
          // Create new div with styles.
          dese1.className = "fade-in";
          dese1.style.position = "relative";
          downbtn1.className = "fade-in"; // Add the                           fade-in class to the new element
          downbtn1.style.position = "relative";
          grid.classList.add("selected");
      
          dese1.style.textAlign = "center";
          dese1.style.fontFamily = "Rubik";
      
          // Set ID's for the new elements.
          dese1.setAttribute('id', 'dese' + contentId);
          downbtn1.setAttribute('id', 'downbtn' + contentId);
          downbtn1.setAttribute('onclick', 'OMALDL()')
      
          const txtdese1 = document.createTextNode("One Miliseconds at Luigikaboy's is exactly what it sounds like. There's nothing to it besides being a joke game.");
          const txtdownbtn1 = document.createTextNode("DOWNLOAD");
          dese1.appendChild(txtdese1);
          background.appendChild(dese1);
          background.appendChild(downbtn1);
          downbtn1.appendChild(txtdownbtn1);
          txtdownbtn1.textAlign = "center";
      
        // Start the fading in animation
        setTimeout(function () {
            dese1.style.opacity = "1";
            downbtn1.style.opacity = "1";
            if (mobile.matches) {
              logo.style.transform = "scale(1.3)";
            } else {
              logo.style.transform = "scale(1.75)";
            }
            logo.style.top = "17%";
            year.style.transform = "translateY(-80px)";
        }, 10);
          break;
           
      case 2:
      background.style.backgroundPosition = "1200px";
      // Create Elements
      const dese2 = document.createElement("div");
      const downbtn2 = document.createElement("button");
  
      // Create new div with styles.
      dese2.className = "fade-in";
      downbtn2.className = "fade-in"; // Add the fade-in class to the new element
      grid.classList.add("selected");
  
      dese2.style.textAlign = "center";
      dese2.style.fontFamily = "Rubik";
  
      // Set ID's for the new elements.
      dese2.setAttribute('id', 'dese' + contentId);
      downbtn2.setAttribute('id', 'downbtn' + contentId);
  
      const textcontent = document.createTextNode("Jonathan's Adventure 3 is a Five Night's at Freddy's fan-game developed on the Clickteam Fusion 2.5 Engine, I developed it at severecorp as a Lead Programmer, Designer and Sound Artist.");
      const textcontentdown = document.createTextNode("DOWNLOAD N/A");
      dese2.appendChild(textcontent);
      background.appendChild(dese2);
      background.appendChild(downbtn2);
      downbtn2.appendChild(textcontentdown);
  
    // Start the fading in animation
    setTimeout(function () {
        logo.style.height = "170px";
        dese2.style.opacity = "1";
        downbtn2.style.opacity = "0.75";
        logo.style.width = "80%";
        logo.style.transform = "scale(100%)";
        logo.style.top = "0%";
        year.style.transform = "translateY(120px)";
    }, 10);
    break;

}
}
}

function RevertZoom(contentId){
  var grid = document.getElementById("GRID-" + contentId);
  var background = document.getElementById("GRIDB-" + contentId);
  var logo = document.getElementById("LOGO-" + contentId);
  var year = document.getElementById("YEAR-" + contentId);
  
  if (document.getElementById("GRID-" + contentId).classList.contains("selected")) {
      // Remove the dynamically added elements
  var description = document.getElementById("dese" + contentId);
  var downbtn = document.getElementById("downbtn" + contentId);
  grid.classList.remove("selected");
  grid.style.cursor = "pointer";

  if (description) {
      background.removeChild(description);
  }
  if (downbtn) {
      background.removeChild(downbtn);
  }

  setTimeout(function () {
      background.style.backgroundPosition = "500px";
      if (contentId === 2) {
      year.style.transform = "translateY(100px)";
      logo.style.height = null;
      logo.style.width = null;
      logo.style.transform = null;
      logo.style.top = null;
      }
      grid.style.width = "250px";
      grid.style.height = "150px";
      description.style.opacity = "0";
      downbtn.style.opacity = "0"
      if (contentId === 1) {
        logo.style.top = "30%";
        logo.style.transform = "scale(1)";
        year.style.transform = "translateY(20px)";
      }
  }, 10);

  currentZoomedGrid = null;
}

  }


function OMALDL() {
    window.location='https://gamejolt.com/get/build?game=764231&build=1314643';
 }