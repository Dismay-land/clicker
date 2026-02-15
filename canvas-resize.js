import { resizeCanvas } from "./functions.js"
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
//check if cavas initialized

if (!canvas || !ctx) {
    console.error("Canvas not initialized");
};