import { spawnParticles } from "./functions.js";
document.addEventListener("click", (e) => {
    spawnParticles(e.clientX, e.clientY);
});