function goTo(room) {
  // Change panorama image
  document.getElementById("sky").setAttribute("src", "assets/" + room + ".png");

  // Optional: close menu automatically after selecting a room
  // toggleMenu(true); // comment out if you want menu to stay open
}

function toggleMenu(forceClose = false) {
  const menu = document.getElementById("menu");

  // Get current left value
  const left = menu.style.left || "0px"; // menu visible by default

  if (forceClose || left === "0px") {
    menu.style.left = "-250px"; // Hide menu
  } else {
    menu.style.left = "0px"; // Show menu
  }
}
