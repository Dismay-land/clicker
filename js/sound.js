import { showMissingSoundPopup } from "./functions.js";
// unlock sound play
const clickSound = document.getElementById("clickSound");
clickSound.volume = 0.4;
document.body.addEventListener("mousedown", () => {
    clickSound.play().catch(() => { });
}, { once: true });
clickSound.addEventListener("error", () => {
    showMissingSoundPopup();
});
