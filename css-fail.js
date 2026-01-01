const continueBtn = document.getElementById("continueBtn");
const atmpText = document.getElementById("atmp");
const dwnldBtn = document.getElementById("dwnld");
const style = document.getElementById("download");
const frcscheck = document.getElementById("force");
const redir = document.getElementById("redir")
const fallbackCSS = `
    #css-test-element {
    width: 10px;
}

#myButton {
    border-radius: 0 !important;
    margin-left: 100px;
    width: auto !important;
    height: auto !important;
    padding: 1px 10px !important;
    font-size: 14px !important;
    transition: 150ms !important;

}

#myButton:hover {
    border-radius: 0 !important;
    width: auto !important;
    height: auto !important;
    padding: 5px 15px !important;
    font-size: 19px !important;
    transition: 150ms !important;
}

#myButton:active {
    /* main code */
    border-radius: 0 !important;
    width: auto !important;
    height: auto !important;
    padding: 3px 12px !important;
    font-size: 14px !important;
    transition: 150ms !important;
}

#particle-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.particle {
    position: absolute;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 8px purple;
    animation: floatUp 0.8s ease-out forwards;
}

@keyframes floatUp {
    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    to {
        opacity: 0;
        transform: translateY(-50px) scale(1.5);
    }
}

#soundErrorPopup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

#soundErrorPopup .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
}

#soundErrorPopup button {
    margin-top: 10px;
    padding: 10px 20px;
}

#particleCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
#settings {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
}
#settingsMenu {
    background: white;
    margin-left: 400px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
}
`;


dwnldBtn.onclick = function () {
    btn = document.getElementById("continueBtn");
    const style = document.createElement("style");
    style.textContent = fallbackCSS;
    document.head.appendChild(style);
    btn.textContent = "continiue to page";
    atmpText.textContent = "✅ CSS applied via internal fallback. please click 'continiue to page' to continiue.";
};

continueBtn.onclick = function () {
    const link = document.getElementById("mainCSS");
    link.href = "./btnclk.css?" + new Date().getTime(); // Force reload by appending timestamp

    // Check if CSS loads after a short delay
    setTimeout(() => {
        const test = getComputedStyle(document.getElementById("css-test-element")).width;
        if (test === "10px") {
            // CSS loaded successfully
            document.getElementById("cssError").style.display = "none";
        } else {
            atmpText.textContent = "⚠️ CSS still failed to load. Please check your file location.";
            redir.style.display = "flex";
        }

    }, 1000); // 1 second delay
};
frcscheck.onclick = function () {
    if (!confirm("Are you sure you want to continiue? note that this feature only works on Android")) return;
    const link = document.getElementById("mainCSS");
    link.href = "/storage/emulated/0/idx/btnclk.css"
    setTimeout(() => {
        const test = getComputedStyle(document.getElementById("css-test-element")).width;
        if (test === "10px") {
            // CSS loaded successfully
            document.getElementById("cssError").style.display = "none";
        } else {
            atmpText.textContent = "⚠️ CSS still failed to load. Please check your file location.";
            redir.style.display = "flex";
        }

    }, 1000); // 1 second delay
}