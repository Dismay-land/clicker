if (innerWidth < 600) {
    menuBtn.style.display = "block";
    menuDiv.style.display = "none";
}
else {
    menuBtn.style.display = "none";
    menuDiv.style.display = "block";
    menuDiv.style.backgroundColor = "transparent";
    menuDiv.style.border = "none";
}
menuBtn.onclick = function () {
    if (menuDiv.style.display === "none") {
        menuDiv.style.display = "block";
        menuBtn.style.top = "240px";
    }
    else {
        menuDiv.style.display = "none";
        menuBtn.style.top = "100px";
    };
};