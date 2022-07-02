function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let x = document.getElementById("username");
    let user = getCookie("username");
    if (user != "") {
      document.getElementById("username-sign").style.display = "none";
    } else {
      user = prompt("Please enter a new username:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  function setImage(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getImage(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkImage() {
    let user = getCookie("image");
    if (user != "") {
      document.getElementById("user-img").src = user;
    } else {
      user = prompt("Please enter a image link:", "");
      if (user != "" && user != null) {
        setCookie("image", user, 365);
      }
    }
  }
  function changeImage() {
    let user = getCookie("image");
    user = prompt("Please enter a new image link:", "");
    setCookie("image", user, 365);
  }
  function newUser() {
    let user = getCookie("username");
    let image = getCookie("image");
    let x = document.getElementById("username");
    let count = window.localStorage.getItem("followCount");
    var display = document.getElementById("user-followers");
    var udisplay = document.getElementById("user-img");
    display.innerHTML = count;
    if (image != "") {
      udisplay.src = image;
      document.getElementById("sign-img").style.display = "none";
      document.getElementById("check-import").innerHTML = "Logged In";
    } else {
      udisplay.src =
        "https://cdn.glitch.global/16fd2c9e-1980-4b8c-ba85-3ef2a66d3ee3/R.png?v=1656704694585";
      document.getElementById("change-img").style.display = "none";
    }
    if (user != "") {
      x.innerHTML = user;
      document.getElementById("username-sign").style.display = "none";
      document.getElementById("check-import").innerHTML = "Logged In";
    } else {
      x.innerHTML = "User" + "&nbsp" + Math.floor(Math.random() * 100) + 1;
      document.getElementById("change-img").style.display = "none";
    }
  }
  