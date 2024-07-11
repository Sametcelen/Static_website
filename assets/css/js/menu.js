const activeMenuItem = document.getElementById(window.location.pathname.replace("/", "").split(".")[0]);
if (activeMenuItem) {
    activeMenuItem.style.color = "rgb(87, 13, 13)";
}
