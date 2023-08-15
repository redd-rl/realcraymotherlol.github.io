// Define the fetchOSInfo function
async function fetchOSInfo() {
  try {
    const response = await fetch('https://realcraymotherlol.github.io/JSON/Windows11.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching OS information:', error);
    return null;
  }
}

console.log(OSInfo);
fetchOSInfo().then(data => {
  const OSInfo = data;
  // Data is available, proceed with the rest of the code
  const buildDropdown = document.getElementById("build");
  const architectureContainer = document.getElementById("architecture-container");
  const architectureDropdown = document.getElementById("architecture");
  const versionContainer = document.getElementById("version-container");
  const versionDropdown = document.getElementById("version");
  const downloadButton = document.getElementById("download-button");
  
  buildDropdown.addEventListener("change", updateArchitectureDropdown);
  architectureDropdown.addEventListener("change", updateVersionDropdown);
  versionDropdown.addEventListener("change", enableDownloadButton);
  
  // Populate the "Build" dropdown based on the keys of the OSInfo dictionary
  for (const build in OSInfo) {
    const option = document.createElement("option");
    option.value = build;
    option.textContent = build;
    buildDropdown.appendChild(option);
  }
  
  function updateArchitectureDropdown() {
    const selectedBuild = buildDropdown.value;
    const architectures = Object.keys(OSInfo[selectedBuild]);
  
    architectureDropdown.innerHTML = '<option value="" selected disabled>Select Architecture</option>';
    architectures.forEach(architecture => {
      const option = document.createElement("option");
      option.value = architecture;
      option.textContent = architecture;
      architectureDropdown.appendChild(option);
    });
  
    fadeIn(architectureContainer);
    fadeOut(versionContainer);
    versionDropdown.innerHTML = '<option value="" selected disabled>Select Version</option>';
    downloadButton.disabled = true;
  }
  
  function updateVersionDropdown() {
    const selectedBuild = buildDropdown.value;
    const selectedArchitecture = architectureDropdown.value;
    const versions = Object.keys(OSInfo[selectedBuild][selectedArchitecture]);
  
    versionDropdown.innerHTML = '<option value="" selected disabled>Select Version</option>';
    versions.forEach(version => {
      const option = document.createElement("option");
      option.value = version;
      option.textContent = version;
      versionDropdown.appendChild(option);
    });
  
    fadeIn(versionContainer);
    downloadButton.disabled = true;
  }
  
  function enableDownloadButton() {
    if (versionDropdown.value !== "") {
      downloadButton.disabled = false;
    } else {
      downloadButton.disabled = true;
    }
  }
  function fadeIn(element) {
    element.style.display = "block";
    setTimeout(() => {
      element.style.opacity = "1";
    }, 10);
  }
  
  function fadeOut(element) {
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.display = "none";
    }, 500);
  }
  function validateForm(event) {
    event.preventDefault();
    const selectedBuild = buildDropdown.value;
    const selectedArchitecture = architectureDropdown.value;
    const selectedVersion = versionDropdown.value;
  
    if (selectedBuild && selectedArchitecture && selectedVersion) {
      const downloadLink = globalOSInfo[selectedBuild][selectedArchitecture][selectedVersion];
      if (downloadLink) {
        window.location.href = downloadLink;
      } else {
        console.log("No download link found for the selected options.");
      }
    } else {
      console.log("Please select all options.");
    }
  }
})
