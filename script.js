// menu
const menuItems = document.querySelectorAll(".menu-item");
// messages
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector(".messages");
const messageSearch = document.querySelector("#message-search");
const message = document.querySelectorAll(".message");

// themes
const theme = document.querySelector("#Theme");
const customizeTheme = document.querySelector(".customize-theme");

// fonts

const fontSize = document.querySelectorAll(".choose-size span");

// coose bg
const chooseBg = document.querySelectorAll(".choose-bg");

const bg1 = document.querySelector(".bg-1 ");
const bg2 = document.querySelector(".bg-2 ");
const bg3 = document.querySelector(".bg-3 ");

let root = document.querySelector(":root");
// --------------------------------remove active from menu----------------------------------

const changeItems = () => {
  menuItems.forEach(function (items) {
    items.classList.remove("active");
  });
};

// --------------------------------notification ui----------------------------------

menuItems.forEach((items) => {
  items.addEventListener("click", () => {
    changeItems();
    items.classList.add("active");
    if (items.id != "notifications-count") {
      let noti = document.querySelector(".notification-popUp");
      noti.style.display = "none";

      let notificationCounts = document.querySelector(".notification-counts");
      notificationCounts.style.display = "block";
    } else {
      let noti = document.querySelector(".notification-popUp");
      noti.style.display = "block";

      let notificationCounts = document.querySelector(".notification-counts");
      notificationCounts.style.display = "none";
    }
  });
});

// --------------------------------message notifications----------------------------------

// search box for message inputs
const searchMessage = () => {
  const searchText = messageSearch.value.toLowerCase();

  message.forEach((msg) => {
    const messageText = msg.textContent.toLowerCase("h4");
    console.log(messageText);

    if (messageText.indexOf(searchText) !== -1) {
      msg.style.display = "flex";
    } else {
      msg.style.display = "none"; // Hide the message
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// -------------------------------- highlight message card----------------------------------

messageNotification.addEventListener("click", messageNotify);

function messageNotify() {
  messages.style.boxShadow = "0 0 16px var(  --color-primary)";
  let msg = messageNotification.querySelector(".notification-counts");
  msg.style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
}

// -------------------------------- Theme customization click ----------------------------------
// open theme
theme.addEventListener("click", showThemeUi);

let card = customizeTheme.querySelector(".card");

function showThemeUi() {
  let card = customizeTheme.querySelector(".card");
  customizeTheme.style.display = "grid";

  card.style.boxShadow = "0 0 16px var(  --color-primary)";
  setTimeout(() => {
    card.style.boxShadow = "none";
  }, 3000);
}

// close thme
let closeTheme = (event) => {
  if (event.target.className === "customize-theme") {
    customizeTheme.style.display = "none";
  }
};

customizeTheme.addEventListener("click", closeTheme);

// -------------------------------- Theme customization for fonts ----------------------------------

// remove active\

const sizeActiveRemove = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    sizeActiveRemove();
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "6.4rem");
      root.style.setProperty("--sticky-top-right", "-10rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty;
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty;
      root.style.setProperty("--sticky-top-left", "-2 rem");
      root.style.setProperty("--sticky-top-right", "-17 rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty;
      root.style.setProperty("--sticky-top-left", "4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty;
      root.style.setProperty("--sticky-top-left", "4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// -------------------------------- Theme color  customization

function removeActiveColor() {
  colors.forEach((color) => {
    color.classList.remove("active");
  });
}

const colors = document.querySelectorAll(".choose-color span");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    console.log(color);
    if (color.classList.contains("color1")) {
      root.style.setProperty("--color-primary", "#f45768");
      root.style.setProperty("--color-secondary", "#FFDFE2");
    } else if (color.classList.contains("color2")) {
      root.style.setProperty("--color-primary", "#6eb6ff");
      root.style.setProperty("--color-secondary", "#D7EAFD");
    } else if (color.classList.contains("color3")) {
      root.style.setProperty("--color-primary", "#f19927");
      root.style.setProperty("--color-secondary", "#D7EAFD");
    } else if (color.classList.contains("color4")) {
      root.style.setProperty("--color-primary", "#006bb9");
      root.style.setProperty("--color-secondary", "#D7EAFD");
    } else if (color.classList.contains("color5")) {
      root.style.setProperty("--color-primary", "#635ad9");
      root.style.setProperty("--color-secondary", "#D7EAFD");
    } else if (color.classList.contains("color6")) {
      root.style.setProperty("--color-primary", "#46b7b9");
      root.style.setProperty("--color-secondary", "#C7E9EA");
    }
    removeActiveColor();
    color.classList.add("active");
  });
});

// bg customize theme


bg1.addEventListener("click", () => {
  //   removeActiveBgColor();
  root.style.setProperty("--color-light", "#efeef1");
  root.style.setProperty("--color-white", "#FFFFFF");
  root.style.setProperty("--color-dark", "#494750");

  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");

  card.style.boxShadow = "0 0 16px var(  --color-primary)";
  setTimeout(() => {
    card.style.boxShadow = "none";
  }, 3000);
});

bg3.addEventListener("click", () => {
  //   removeActiveBgColor();
  root.style.setProperty("--color-light", "#252f3d");
  root.style.setProperty("--color-white", "#3B485A");
  root.style.setProperty("--color-dark", "white");
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
});

bg2.addEventListener("click", () => {
  //   removeActiveBgColor();
  root.style.setProperty("--color-light", "#3F4D61");
  root.style.setProperty("--color-white", "#8391A5");
  root.style.setProperty("--color-dark", "white");
  root.style.setProperty("--color-gray", "#DCDCDD");

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
});
