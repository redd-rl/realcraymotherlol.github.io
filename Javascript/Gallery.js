
function toggleliflex(id, listItemID) {
    var osFlexDiv = document.getElementById(id);
    if (osFlexDiv) {
        var allOsFlexDivs = document.querySelectorAll('[id^="galflex-"]');
        allOsFlexDivs.forEach(function (div) {
            if (div === osFlexDiv) {
                div.setAttribute("shown", "true");
            } else {
                div.setAttribute("shown", "false");
            }
        });

        var allListItems = document.querySelectorAll('[id^="li-"]');
        allListItems.forEach(function (item) {
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

let VIDEOLIST = document.querySelectorAll(".videolist .vid");
let VIDEOPLAYER = document.querySelector(".videoplayer iframe");
let TITLEVIDEO = document.querySelector(".videoplayer .title")

VIDEOLIST.forEach(div => {
    div.onclick = () => {
        VIDEOLIST.forEach(div => div.classList.remove('active'));
        div.classList.add('active');
        if (div.classList.contains('active')) {
            let src = div.children[0].getAttribute('src');
            VIDEOPLAYER.src = "https://www.youtube.com/embed/" + src;
        };
    };
});