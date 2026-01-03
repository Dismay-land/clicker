shopBtn.onclick = function () {
    if (shopDiv.style.display === "none") {
        shopDiv.style.display = "block";
    }
    else if (shopDiv.style.display === "block") {
        hideShop();
    };
};
function hideShop() {
    shopDiv.style.display = "none"
}
