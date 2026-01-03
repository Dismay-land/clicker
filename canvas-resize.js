resizeCanvas();
window.addEventListener("resize", resizeCanvas);
//check if cavas initialized

if (!canvas || !ctx) {
    console.error("Canvas not initialized");
};
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
};