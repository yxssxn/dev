const asciiArt = `
 ___.__.___  ___  ______  _________  ___  ____      ___  ___ ___.__.________
<   |  |\\  \\/  / /  ___/ /  ___/\\  \\/  / /    \\     \\  \\/  /<   |  |\\___   /
\\___  | >    <  \\___ \\  \\___ \\  >    < |   |  \\     >    <  \\___  | /    /
 / ____|/__/\\_ \\/____  >/____  >/__/\\_ \\|___|  / /\\ /__/\\_ \\ / ____|/_____ \\
 \\/           \\/     \\/      \\/       \\/     \\/  \\/       \\/ \\/           \\/`;

let asciiArtIndex = 0;
const typingSpeed = 5;

function typeAsciiArt() {
  if (asciiArtIndex < asciiArt.length) {
    document.getElementById("ascii-art").textContent += asciiArt.charAt(asciiArtIndex);
    asciiArtIndex++;
    setTimeout(typeAsciiArt, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeAsciiArt();
  fetchLinks();
  setTheme();
  change();
});

function toggleSocials() {
  var link = document.getElementById("links");
  link.classList.add("a__active");
  document.getElementById("socials").style.display = "flex";
  document.getElementById("bookmarks").style.display = "none";
  var link2 = document.getElementById("bookmark");
  link2.classList.remove("a__active");
}

function toggleBookMarks() {
  var link = document.getElementById("bookmark");
  link.classList.add("a__active");
  document.getElementById("bookmarks").style.display = "flex";
  document.getElementById("socials").style.display = "none";
  var link2 = document.getElementById("links");
  link2.classList.remove("a__active");
}

function toggleNight() {
  var element = document.body;
  element.classList.toggle("night");
}

const date = new Date();
let time = date.toLocaleTimeString([], {
  hourCycle: 'h23',
  hour: '2-digit',
  minute: '2-digit'
});

console.log(time);

function setTheme() {
  if (time >= 19 || time <= 06) {
    toggleNight();
  }
}

function change() {
  if (document.getElementsByTagName("body")[0].classList.contains("night")) {
    document.getElementById("night__btn").innerText = "Light";
  } else {
    document.getElementById("night__btn").innerText = "Dark";
  }
}

function mode() {
  toggleNight();
  change();
}

function fetchLinks() {
  fetch("links.json")
    .then((response) => response.json())
    .then((data) => {
      const socials = data.socials;
      const bookmarks = data.bookmarks;

      const socialsTable = document.getElementById("socialsTable");
      const bookmarksTable = document.getElementById("bookmarksTable");

      socials.forEach((item) => {
        const row = document.createElement("div");
        row.classList.add("table-row");

        const nameCell = document.createElement("div");
        nameCell.classList.add("table-cell");
        const nameLink = document.createElement("a");
        nameLink.classList.add("table__links");
        nameLink.href = item.url;
        nameLink.target = "_blank"; // Add this line to open link in new tab
        nameLink.textContent = item.name;
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        socialsTable.appendChild(row);
      });

      bookmarks.forEach((item) => {
        const row = document.createElement("div");
        row.classList.add("table-row");

        const nameCell = document.createElement("div");
        nameCell.classList.add("table-cell");
        const nameLink = document.createElement("a");
        nameLink.classList.add("table__links");
        nameLink.href = item.url;
        nameLink.target = "_blank"; // Add this line to open link in new tab
        nameLink.textContent = item.name;
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        bookmarksTable.appendChild(row);
      });
    });
}


document.addEventListener("DOMContentLoaded", function () {
  setTheme();
  change();
});
