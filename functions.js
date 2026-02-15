// call debuger
removeMinusFromInput();

// bonus button functions
export function spawnBonusButton() {
    setTimeout(() => {
        bonusBtn.style.display = "block";
        const plus = Math.floor(Math.random() * Math.max(1, score / 2)) + 100;
        bonusBtn.textContent = "+" + plus + "!";
        const x = Math.random() * (window.innerWidth - bonusBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - bonusBtn.offsetHeight);
        const w = Math.random() * 200 + 50;
        const l = Math.random() * 100 + 20;
        bonusBtn.style.position = "absolute";
        bonusBtn.style.left = `${x}px`;
        bonusBtn.style.top = `${y}px`;
        bonusBtn.style.width = `${w}px`;
        bonusBtn.style.height = `${l}px`;
        bonusBtn.style.boxShadow = `0 0 20px rgb(0, 215, 0)`;
        BonusButtonOverTime();

        // If player purchased the bonus feature, award immediately; otherwise set onclick
        setTimeout(() => {
            if (bonusfeat === 1) {
                bonusBtn.style.display = "none";
                score += plus;
                button.textContent = score;
                luckACH = 1;
                localStorage.setItem("luck", luckACH);
            } else {
                bonusBtn.onclick = function () {
                    bonusBtn.style.display = "none";
                    score += plus;
                    button.textContent = score;
                    luckACH = 1;
                    localStorage.setItem("luck", luckACH);
                    checkAchivements();
                    spawnBonusButton();
                };
            }
        }, 1000);
    }, 100000);
}
export function BonusButtonOverTime() {
    setTimeout(() => {
        bonusBtn.style.display = "none";
        spawnBonusButton();
        //make function stop if button was clicked
        if (bonusBtn.style.display === "none") return;
    }, 20000);
}

// particle controller
export function spawnParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 30
        });
    }
};
export function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.life > 0);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.globalAlpha = p.life / 30;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
};

// avhiements and offline earnings
export function checkAchivements() {
    if (bonusfeat === 1 || lvlfeat === 1) document.getElementById("feat").textContent = "features?!"

    if (luckACH === 1) document.getElementById("luck").textContent = "LUCKY!"

    if (clicks >= 1) document.getElementById("click").textContent = "1 click down...";

    if (clicks >= 100) document.getElementById("100clk").textContent = "100 clicks!";

    if (level > 1) document.getElementById("1lvl").textContent = "LEVEL UP!!!"

    if (clicks >= 1000) document.getElementById("1000clk").textContent = "what comes after 999? 1000!!!!!!!!!!!!!!!";

    if (clicks >= 5000) document.getElementById("5000clk").textContent = "5000 down, 20 thousand more clicks to go...";

    if (clicks >= 25000) document.getElementById("25000clk").textContent = "click-aholic";

    if (clicks >= 10000) document.getElementById("10000clk").textContent = "VRO, TOUCH SUM GRASS 🙏😭🥀";

    if (clicks >= 15000) document.getElementById("15000clk").textContent = "are u seriously unemployed?";

    if (auto >= 1) document.getElementById("1auto").textContent = "some automating going on";

    if (auto >= 10) document.getElementById("10auto").textContent = "getting serious with the auto-clickers";

    if (auto >= 50) document.getElementById("50auto").textContent = "OH MY LORD";

    if (auto >= 100) document.getElementById('100auto').textContent = "there is so many other powerfull upgrades, and you are choosing the weakest one!?"

    if (generators >= 1) document.getElementById("1gen").textContent = "GENERATING TEXT... SUCSESS.";

    if (generators >= 10) document.getElementById("10gen").textContent = "powering up...";

    if (generators >= 50) document.getElementById("50gen").textContent = "CLICK OVERLOAD!!!";

    if (generators >= 100) document.getElementById('100gen').textContent = "i mean, out of all the upgrades, this one is the cheapest so i guess you have a point...?"

    if (factories >= 1) document.getElementById("1fac").textContent = "factory is opperational";

    if (factories >= 10) document.getElementById("10fac").textContent = "huge production";

    if (factories >= 50) document.getElementById("50fac").textContent = "earth = factory now";

    if (factories >= 100) document.getElementById('100fac').textContent = "bro, stop polluting earth"

    if (reactors >= 1) document.getElementById("1reactor").textContent = "quantumized points";

    if (reactors >= 10) document.getElementById("10reactor").textContent = "quantumized points (why does this make me think about cookies?)";

    if (reactors >= 50) document.getElementById("50reactor").textContent = "to many points...?";

    if (reactors >= 100) document.getElementById("100reactor").textContent = "Huge reaction"

    if (alcam >= 1) document.getElementById("1alcam").textContent = "alchemy is real";

    if (alcam >= 10) document.getElementById("10alcam").textContent = "ten labs, are u serious?";

    if (alcam >= 50) document.getElementById("50alcam").textContent = "philosophic clicks?";

    if (alcam >= 100) document.getElementById("100alcam").textContent = "I don't even know what to say (literally)"

    if (Gpa >= 1) document.getElementById('1gpa').textContent = 'Memory...'

    if (Gpa >= 10) document.getElementById('10gpa').textContent = 'oh what farm, it is to harvest!'

    if (Gpa >= 50) document.getElementById('50gpa').textContent = 'from seeds, to chicken, to egg, to clicks'

    if (Gpa >= 100) document.getElementById('100gpa').textContent = 'I miss him... lemme just call him.'

    if (grandmas >= 1) document.getElementById("1grandma").textContent = "RIP Grandma";

    if (grandmas >= 10) document.getElementById("10grandma").textContent = "raining cicks (thanks grandma)";

    if (grandmas >= 50) document.getElementById("50grandma").textContent = "heavanly clicks";

    if (grandmas >= 100) document.getElementById("100grandma").textContent = "she will not be forgoten."
};
export function giveDailyReward() {
    let today = new Date().toDateString();
    let lastReward = localStorage.getItem("lastRewardDate");

    if (lastReward !== today) {
        // Give reward only once per day
        score += giveAmount;

        // Update UI
        button.textContent = score;

        // Save
        localStorage.setItem("score", score);
        localStorage.setItem("lastRewardDate", today);

        // Show popup
        showDailyPopup();
    }
};
function showDailyPopup() {
    const pop = document.createElement("div");
    pop.textContent = "🎁 Daily Reward: +" + giveAmount + " Points!";
    pop.style.position = "fixed";
    pop.style.top = "20px";
    pop.style.left = "50%";
    pop.style.transform = "translateX(-50%)";
    pop.style.background = "#4CAF50";
    pop.style.color = "white";
    pop.style.padding = "15px 25px";
    pop.style.borderRadius = "12px";
    pop.style.fontSize = "20px";
    pop.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    pop.style.zIndex = "9999";
    pop.style.opacity = "1";
    pop.style.transition = "opacity 1s ease";

    document.body.appendChild(pop);

    setTimeout(() => {
        pop.style.opacity = "0";
        setTimeout(() => pop.remove(), 1000);
    }, 2000);
};
export function checkOfflineEarnings() {
    let saved = localStorage.getItem("lastOnline");
    if (!saved) return;

    let msAway = Date.now() - parseInt(saved);
    let secondsAway = Math.floor(msAway / 1000);

    // Offline rate = your upgrades + prestige multiplier
    let offlineRate = (1 + upgrades) * prestigeMult;

    let earned = secondsAway * offlineRate;
    score += earned;

    alert("You were away for " + secondsAway +
        "s and earned " + earned + " points!");
    let mybtn = document.getElementById("myButton")
    mybtn.textContent += earned


};
export function playClickSound() {
    document.getElementById("clickSound").currentTime = 0;
    document.getElementById("clickSound").play();
};

// debugers and errors
export function showMissingSoundPopup() {
    const popup = document.createElement("div");
    popup.id = "soundErrorPopup";
    popup.innerHTML = `
        <div class="popup-content">
            <h2>⚠️ Sound File Missing</h2>
            <p>The file <b>clk.mp3</b> could not be loaded.</p>
            <p>sounds will NOT work if tranfered by USB or if sound is not dowloaded</p>
            <button id="closeSoundPopup">OK</button>
        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("closeSoundPopup").onclick = () => {
        popup.remove();
    };
};
function removeMinusFromInput() {
    if (!input.value.includes('-')) {
        return;
    } else {
        input.value = '1';
        cost = level * amount * 100;
    }
    setTimeout(() => {
        removeMinusFromInput();
    }, 500);
};

// unclassified
export function autoleveler() {
    amount = parseInt(input.value, 10) || 1;
    let cost = Math.abs(level * amount * 100);        // price calculation
    let nextCost = Math.abs(level * amount * 100);
    if (autolvlON.value === "on" && score >= cost && level <= 9.5e+20) {
        score -= cost;
        level += Math.abs(amount);

        button.textContent = score;
        display.textContent = "Level: " + level;
        let nextAmount = parseInt(input.value, 10) || 1;
        nextCost = Math.abs(level * nextAmount * 100); // controll cost display after level up
        costDisplay.textContent = "Cost for next level: " + nextCost;
        localStorage.setItem("score", score);
        localStorage.setItem("level", level);
        checkAchivements();
        if (input.value.includes('-')) {
            input.value = '1';
            cost = Math.abs(level * amount * 100);
        } else {
            requestAnimationFrame(autoleveler);
        }

    } else if (level >= 9.5e+20) {
        levelBtn.disabled = true
        levelBtn.textContent = "MAX LEVEL"
        input.style.display = "none"
        costDisplay.textContent = ""
    } else {
        costDisplay.textContent = "Cost for next level: " + nextCost;
    }
};
export function startAutoClicker() {
    if (autoActive) return; // don't start twice
    autoActive = true; // turn system on correctly
    setInterval(() => {
        let totalGain = 0;

        totalGain += (auto + autoBoost) * 1;
        totalGain += generators * 5;
        totalGain += factories * 25;
        totalGain += reactors * 100;
        totalGain += alcam * 10000;
        totalGain += grandmas * 1000000;

        if (totalGain > 0) {
            score += totalGain;
            button.textContent = score;
            localStorage.setItem("score", score);
        }
    }, 1000);
};
export function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
};