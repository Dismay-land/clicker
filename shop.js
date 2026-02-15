shopBtn.onclick = function () {
    if (shopDiv.style.display === "none") {
        shopDiv.style.display = "block";
    }
    else {
        shopDiv.style.display = "none";
    };
    if (dark == 1) shopDiv.style.backgroundColor = "rgb(0, 0, 0)";
    else shopDiv.style.backgroundColor = 'rgb(255, 255, 255)'

    if (innerHeight <= 600) shopDiv.style.maxHeight = "150px"  
};