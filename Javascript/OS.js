
        function toggleOsFlex(id, listItemID) {
            var osFlexDiv = document.getElementById(id);
            if (osFlexDiv) {
                var allOsFlexDivs = document.querySelectorAll('[id^="osflex-"]');
                allOsFlexDivs.forEach(function(div) {
                    if (div === osFlexDiv) {
                        div.style.display = "flex";
                    } else {
                        div.style.display = "none";
                    }
                });

                var allListItems = document.querySelectorAll('[id^="osli-"]');
                allListItems.forEach(function(item) {
                    if (item.id === listItemID) {
                        item.classList.add("active-list-item");
                        item.classList.remove("deactive-list-item");
                    } else {
                        item.classList.add("deactive-list-item");
                        item.classList.remove("active-list-item");
                    }
                });
            }
        }
