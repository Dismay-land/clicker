// make the pet move to random positions every few moments flently
let moving = false;

function movePet() {
    const x = Math.random() * (window.innerWidth);
    // check if the current possition is more or less then the selected posiion
    if (pet.offsetLeft < x) {
        moving = true;
        // move right and rotate the direction of pet to the right
        petName.style.transform = "scaleX(1)"; // flip the pet name to match the pet's direction
        pet.style.transform = "scaleX(1)"; // flip the pet to face left

        let currentx = pet.offsetLeft;
        const interval = setInterval(() => {
            if (currentx < x) {
                currentx += 5; // move right
                pet.style.left = currentx + "px";
            }
            else {
                clearInterval(interval);
                moving = false;
            }
        }, 20);
    }
    else {
        moving = true;
        // move left and rotate the direction of pet to the left
        head.style.left = "100px";
        body.style.left = "20px";
        leg1.style.left = "100px";
        leg2.style.left = "20px";
        tail.style.left = "0px";
        petName.style.transform = "scaleX(-1)"; // flip the pet name to match the pet's direction
        pet.style.transform = "scaleX(-1)"; // flip the pet to face left

        let currentx = pet.offsetLeft;
        const interval = setInterval(() => {
            if (currentx > x) {
                currentx -= 5; // move left
                pet.style.left = currentx + "px";
            }
            else {
                clearInterval(interval);
                moving = false;
            }
        }, 20);
    }
}
// make the pet move to random positions every few moments flently
setInterval(() => {
    if (!moving) {
        movePet();
    }
}, 3000);

// constanly check if the pet is owned
setInterval(() => {
    if (petowned == '1') {
        pet.style.display = "block";
    } else {
        pet.style.display = "none";
    }
}, 20);

// add 1/5 of your total points to the score evry minute if the pet is owned (60000)
setInterval(() => {
    if (petowned == '1') {
        const amountToAdd = document.createElement("p");
        amountToAdd.textContent = "+" + Math.floor(score / 5);
        amountToAdd.style.position = "fixed";
        amountToAdd.style.left = pet.offsetLeft + "px";
        amountToAdd.style.top = pet.offsetTop + "px";
        amountToAdd.style.fontSize = "20px";
        amountToAdd.style.color = "green";
        score += Math.floor(score / 5);
        localStorage.setItem("score", score);
        document.body.appendChild(amountToAdd);
        setTimeout(() => {
            document.body.removeChild(amountToAdd);
        }, 2000);
    }
}, 60000);
// and every 10 minutes, take away 1/3 of your total points if the pet is owned (600000). if the score goes lower than a sertian amount, the pet dies and you have to buy it again. the pet dies if the score goes lower than 1000000
setInterval(() => {
    if (petowned == '1') {
        if (score > 1000000) {
            const amountToSubtract = document.createElement("p");
            amountToSubtract.textContent = "-" + Math.floor(score / 3);
            amountToSubtract.style.position = "fixed";
            amountToSubtract.style.left = pet.offsetLeft + "px";
            amountToSubtract.style.top = pet.offsetTop + "px";
            amountToSubtract.style.fontSize = "20px";
            amountToSubtract.style.color = "red";
            score -= Math.floor(score / 3);
            if (score < 0) score = 0;
            localStorage.setItem("score", score);
            document.body.appendChild(amountToSubtract);
            setTimeout(() => {
                document.body.removeChild(amountToSubtract);
            }, 2000);
        } else {
            // pet dies
            alert("Your pet has died due to neglect while you were away. Don't just leave it alone for so long! Please take better care of it next time.");
            localStorage.removeItem("petName");
        }
    }
}, 600000);