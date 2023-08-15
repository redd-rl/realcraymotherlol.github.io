var jsonData = {
    "22H2": {
      "001": {
        "22622": "https://example.com/download/22H2_x86_22622"
      },
      "002": {
        "22622": "https://archive.org/download/windows-11_202108/Windows11.iso"
      },
      "003": {
        "22622": "https://example.com/download/22H2_ARM64_22622"
      }
    }
  };

function checkAndDownload() {
    var build = document.getElementById("build").value;
    var architecture = document.getElementById("architecture").value;
    var version = document.getElementById("version").value;
  
    if (jsonData.hasOwnProperty(build) && jsonData[build].hasOwnProperty(architecture) && jsonData[build][architecture].hasOwnProperty(version)) {
      var downloadURL = jsonData[build][architecture][version];
      window.location.href = downloadURL;
      return false; // Prevent the form from actually submitting
    } else {
      alert("Selected combination not found in JSON data.");
      return false; // Prevent the form from submitting
    }
  }