cloudSaveBtn.onclick = function () {
    let saveData = {
        score: score,
        cost: cost,
        clicks: clicks,
        level: level,
        auto: auto,
        autoCost: autoCost,
        generators: generators,
        generatorCost: generatorCost,
        factories: factories,
        factoryCost: factoryCost,
        reactors: reactors,
        reactorCost: reactorCost,
        grandmas: grandmas,
        grandmaCost: grandmaCost,
        alcam: alcam,
        alcamCost: alcamCost,
        prestigelvl: prestigelvl,
        prestigeMult: prestigeMult,
        bonusfeat: bonusfeat
    };
    let saveString = btoa(JSON.stringify(saveData));
    prompt("Copy your save code:", saveString);
};

loadSaveBtn.onclick = function () {
    inputLoadSave.style.display = "inline";
    enterSaveBtn.style.display = "inline";
};

enterSaveBtn.onclick = function () {
    let saveString = inputLoadSave.value;
    try {
        let saveData = JSON.parse(atob(saveString));
        score = saveData.score || 0;
        cost = saveData.cost || 100;
        clicks = saveData.clicks || 0;
        level = saveData.level || 1;
        auto = saveData.auto || 0;
        autoCost = saveData.autoCost || 500;
        generators = saveData.generators || 0;
        generatorCost = saveData.generatorCost || 1000;
        factories = saveData.factories || 0;
        factoryCost = saveData.factoryCost || 5000;
        reactors = saveData.reactors || 0;
        reactorCost = saveData.reactorCost || 25000;
        grandmas = saveData.grandmas || 0;
        grandmaCost = saveData.grandmaCost || 10000000;
        alcam = saveData.alcam || 0;
        alcamCost = saveData.alcamCost || 100000;
        prestigelvl = saveData.prestigelvl || 0;
        prestigeMult = saveData.prestigeMult || 1.0;
        bonusfeat = saveData.bonusfeat || 0;

        localStorage.setItem("score", score);
        localStorage.setItem("cost", cost);
        localStorage.setItem("clicks", clicks);
        localStorage.setItem("level", level);
        localStorage.setItem("auto", auto);
        localStorage.setItem("autoCost", autoCost);
        localStorage.setItem("generators", generators);
        localStorage.setItem("generatorCost", generatorCost);
        localStorage.setItem("factories", factories);
        localStorage.setItem("factoryCost", factoryCost);
        localStorage.setItem("reactors", reactors);
        localStorage.setItem("reactorCost", reactorCost);
        localStorage.setItem("grandmas", grandmas);
        localStorage.setItem("grandmaCost", grandmaCost);
        localStorage.setItem("alcam", alcam);
        localStorage.setItem("alcamCost", alcamCost);
        localStorage.setItem("prestigeBtn", prestigelvl);
        localStorage.setItem("prestigeInfo", prestigeMult);
        localStorage.setItem("bonusBtn", bonusfeat);

        location.reload();
    } catch (e) {
        alert("Invalid save code!");
    }
};

button.textContent = score;
totclk.textContent = "total clicks: " + clicks;
afordable.textContent = (score >= cost) ? "afordable" : "not afordable";

prestigeBtn.onclick = function () {

    if (!confirm("acending now will reset all your progress, we strongly recomend you export your current save file before acending. to do so, please go to settings and click export save.")) return;
    if (!confirm("WOAH! are you sure you want to acend? this action is irreversible unless you have exported your save. Don't say I didn't warn you!")) return;
    if (score >= 10000000000) {
        score = 0;
        level = 1;
        clicks = 0;
        auto = 0;
        generators = 0;
        factories = 0;
        reactors = 0;
        grandmas = 0;
        alcam = 0;
        autoCost = 500;
        generatorCost = 1000;
        factoryCost = 5000;
        reactorCost = 25000;
        grandmaCost = 10000000;
        alcamCost = 100000;
        prestigeMult *= 1.5;
        prestigelvl += 1;
        bonusfeat = 0;
        localStorage.clear();
        localStorage.setItem("bonusBtn", bonusfeat);
        localStorage.setItem("score", score);
        localStorage.setItem("level", level);
        localStorage.setItem("clicks", clicks);
        localStorage.setItem("prestigeBtn", prestigelvl);
        localStorage.setItem("prestigeInfo", prestigeMult);
        localStorage.setItem("auto", auto)
        localStorage.setItem("generators", generators)
        localStorage.setItem("factories", factories)
        localStorage.setItem("reactors", reactors)
        localStorage.setItem("grandmas", grandmas)
        localStorage.setItem("alcam", alcam)
        localStorage.setItem("autoCost", autoCost)
        localStorage.setItem("generatorCost", generatorCost)
        localStorage.setItem("factoryCost", factoryCost)
        localStorage.setItem("reactorCost", reactorCost)
        localStorage.setItem("grandmaCost", grandmaCost)
        localStorage.setItem("alcamCost", alcamCost)

        button.textContent = score;
        display.textContent = "Level: " + level;
        prestigeInfo.textContent = "Prestige Multiplier: x" + prestigeMult;
        costDisplay.textContent = "Cost for next level: " + (level * 100);
        totclk.textContent = "total clicks: " + clicks;
        checkAchivements();
    }
    else {
        alert("you don't have enought clicks, go mash that button!")
    };
};

darkModeBtn.onclick = function () {
    if (document.body.style.backgroundColor === "rgb(207, 255, 253)") {
        document.body.style.backgroundColor = "rgb(50, 50, 50)";
        document.body.style.color = "rgb(220, 220, 220)";
    } else {
        document.body.style.backgroundColor = "rgb(207, 255, 253)";
        document.body.style.color = "rgb(0, 0, 0)";
    }
};

settingsBtn.onclick = function () {
    if (settingsMenu.style.display === "none") {
        settingsMenu.style.display = "block";
    } else {
        settingsMenu.style.display = "none";
    }
};

versBtn.onclick = function () {
    if (versDiv.style.display === "none") {
        versDiv.style.display = "block";
    } else {
        versDiv.style.display = "none";
    }
};

grandmaBtn.onclick = function () {
    if (score >= grandmaCost) {
        score -= grandmaCost;
        grandmas++;

        grandmaCost = Math.floor(grandmaCost * 1.75);

        localStorage.setItem("score", score);
        localStorage.setItem("grandmas", grandmas);
        localStorage.setItem("grandmaCost", grandmaCost);

        button.textContent = score;
        grandmaBtn.textContent = "RIP Grandma... (" + grandmaCost + " points)";
        grandmaTxt.textContent = "You have " + grandmas + " Grandmas";
        checkAchivements();
    }
};

genBtn.onclick = function () {
    if (score >= generatorCost) {
        score -= generatorCost;
        generators++;

        generatorCost = Math.floor(generatorCost * 1.5);

        localStorage.setItem("score", score);
        localStorage.setItem("generators", generators);
        localStorage.setItem("generatorCost", generatorCost);

        button.textContent = score;
        genBtn.textContent = "Generator (" + generatorCost + " points)";
        genTxt.textContent = "You have " + generators + " generators";
        checkAchivements();
    }
};

facBtn.onclick = function () {
    if (score >= factoryCost) {
        score -= factoryCost;
        factories++;

        factoryCost = Math.floor(factoryCost * 1.6);

        localStorage.setItem("score", score);
        localStorage.setItem("factories", factories);
        localStorage.setItem("factoryCost", factoryCost);

        button.textContent = score;
        facBtn.textContent = "Factory (" + factoryCost + " points)";
        facTxt.textContent = "You have " + factories + " factories";
        checkAchivements();
    }
};
reactBtn.onclick = function () {
    if (score >= reactorCost) {
        score -= reactorCost;
        reactors++;

        reactorCost = Math.floor(reactorCost * 1.7);

        localStorage.setItem("score", score);
        localStorage.setItem("reactors", reactors);
        localStorage.setItem("reactorCost", reactorCost);

        button.textContent = score;
        reactBtn.textContent = "Quantum Reactor (" + reactorCost + " points)";
        reactTxt.textContent = "You have " + reactors + " reactors";
        checkAchivements();
    }
};
buyAuto.onclick = function () {
    if (score >= autoCost) {
        score -= autoCost;
        auto++;
        autoCost = Math.floor(autoCost * 1.75);

        localStorage.setItem("score", score);
        localStorage.setItem("auto", auto);
        localStorage.setItem("autoCost", autoCost);

        button.textContent = score;
        buyAuto.textContent = "Auto-clicker (" + autoCost + " points)";
        autoInfo.textContent = "You have " + auto + " auto-clickers";

        if (!autoActive) startAutoClicker();  // <-- now works
    }

};

alcamBtn.onclick = function () {
    if (score >= alcamCost) {
        score -= alcamCost;
        alcam++;
        alcamCost = Math.floor(alcamCost * 1.8);

        localStorage.setItem("score", score);
        localStorage.setItem("alcam", alcam);
        localStorage.setItem("alcamCost", alcamCost);

        button.textContent = score;
        alcamBtn.textContent = "Alchemy Lab (" + alcamCost + " points)";
        alcamTxt.textContent = "You have " + alcam + " alchemy labs";

        if (!autoActive) startAutoClicker();  // <-- now works
    }
}

saveBtn.onclick = function () {
    document.getElementById("savetxt").textContent = "Game Saved!";
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
    localStorage.setItem("auto", auto);
    localStorage.setItem("autoCost", autoCost);
    localStorage.setItem("generators", generators);
    localStorage.setItem("generatorCost", generatorCost);
    localStorage.setItem("factories", factories);
    localStorage.setItem("factoryCost", factoryCost);
    localStorage.setItem("reactors", reactors);
    localStorage.setItem("reactorCost", reactorCost);
    localStorage.setItem("grandmas", grandmas);
    localStorage.setItem("grandmaCost", grandmaCost);
    setTimeout(afterPause, 1000); // 1000 milliseconds = 1 second
    function afterPause() {
        document.getElementById("savetxt").textContent = "";
    }
};

button.onclick = function () {
    // define variables
    let cost = level * amount * 100;

    // play click sound
    clickSound.currentTime = 0;
    clickSound.play();

    // change button color randomly
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    button.style.boxShadow = `0 0 20px rgb(${r}, ${g}, ${b})`;

    // main click logic
    score += level * prestigeMult;
    clicks += 1;
    button.textContent = score;
    localStorage.setItem("score", score);
    localStorage.setItem("clicks", clicks);
    // set new total clicks
    totclk.textContent = "total clicks: " + clicks;

    // check if you can afford next level
    afordable.textContent = (score >= cost) ? "afordable" : "not afordable";

    // warn player if they points aproaching infinity
    if (score > 1e+150) {
        alert("Warning: you points are aproaching infinity! me strongly recomend you prestige soon!");
    }
    // warn players if they reach infinity
    if (isFinite(score) === false) {
        alert("ERROR: your points have reached infinity and can no longer be represented correctly. please prestige to continiue normall gameplay.");
    }
};
input.oninput = function () {
    amount = parseInt(input.value, 10) || 1; // default = 1
    let cost = level * amount * 100;
    costDisplay.textContent = "Cost for next level: " + cost;
    afordable.textContent = (score >= cost) ? "afordable" : "not afordable";
    checkAchivements();
};

levelBtn.onclick = function () {

    let amount = parseInt(input.value, 10);   // how many levels player wants
    let cost = level * amount * 100;           // price calculation

    if (score >= cost) {
        score -= cost;
        level += amount;

        button.textContent = score;
        display.textContent = "Level: " + level;
        let nextAmount = parseInt(input.value, 10) || 1;
        let nextCost = level * nextAmount * 100; // controll cost display after level up
        costDisplay.textContent = "Cost for next level: " + nextCost;
        localStorage.setItem("score", score);
        localStorage.setItem("level", level);
        checkAchivements();
    }
};

resetBtn.onclick = function () {
    if (!confirm("Are you SURE you want to reset?")) return;

    score = 0;
    level = 1;
    auto = 0;
    autoCost = 500;
    generators = 0;
    generatorCost = 1000;
    factories = 0;
    factoryCost = 5000;
    reactors = 0;
    reactorCost = 25000;
    grandmas = 0;
    grandmaCost = 10000000;
    clicks = 0;
    alcam = 0;
    alcamCost = 100000;
    prestigelvl = 0;
    prestigeMult = 1.0;
    bonusfeat = 0;
    autoCost = 500;
    generatorCost = 1000;
    factoryCost = 5000;
    reactorCost = 25000;
    grandmaCost = 10000000;
    alcamCost = 100000;

    localStorage.clear();
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
    localStorage.setItem("auto", auto);
    localStorage.setItem("autoCost", autoCost);
    localStorage.setItem("generators", generators);
    localStorage.setItem("generatorCost", generatorCost);
    localStorage.setItem("factories", factories);
    localStorage.setItem("factoryCost", factoryCost);
    localStorage.setItem("reactors", reactors);
    localStorage.setItem("reactorCost", reactorCost);
    localStorage.setItem("grandmas", grandmas);
    localStorage.setItem("grandmaCost", grandmaCost);
    localStorage.setItem("alcam", alcam);
    localStorage.setItem("alcamCost", alcamCost);

    button.textContent = score;
    display.textContent = "Level: " + level;

    let amount = parseInt(input.value, 10) || 1;
    costDisplay.textContent = "Cost for next level: " + (level * amount * 100);

    buyAuto.textContent = "Auto-clicker (" + autoCost + " points)";
    autoInfo.textContent = "You have " + auto + " auto-clickers";
    genBtn.textContent = "Generator (" + generatorCost + " points)";
    genTxt.textContent = "You have " + generators + " generators";
    facBtn.textContent = "Factory (" + factoryCost + " points)";
    facTxt.textContent = "You have " + factories + " factories";
    reactBtn.textContent = "Quantum Reactor " + reactorCost + " points";
    reactTxt.textContent = "You have " + reactors + " reactors";
    grandmaBtn.textContent = "RIP Grandma... (" + grandmaCost + " points)";
    grandmaTxt.textContent = "You have " + grandmas + " Grandmas";



};

function startAutoClicker() {
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
}
function animateParticles() {
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
}

animateParticles();

function checkAchivements() {

    if (clicks >= 1) {
        document.getElementById("click").textContent = "1 click down...";
    }
    if (clicks >= 100) {
        document.getElementById("100clk").textContent = "100 clicks!";
    }
    if (clicks >= 1000) {
        document.getElementById("1000clk").textContent = "what comes after 999? 1000!!!!!!!!!!!!!!!";
    }
    if (clicks >= 50000) {
        document.getElementById("50000clk").textContent = "click-aholic";
    }
    if (auto >= 1) {
        document.getElementById("1auto").textContent = "some automating going on";
    }
    if (auto >= 10) {
        document.getElementById("10auto").textContent = "getting serious with the auto-clickers";
    }
    if (auto >= 50) {
        document.getElementById("50auto").textContent = "OH MY LORD";
    }
    if (generators >= 1) {
        document.getElementById("1gen").textContent = "GENERATING TEXT... SUCSESS.";
    }
    if (generators >= 10) {
        document.getElementById("10gen").textContent = "powering up...";
    }
    if (generators >= 50) {
        document.getElementById("50gen").textContent = "ENERGY OVERLOAD!!!";
    }
    if (factories >= 1) {
        document.getElementById("1fac").textContent = "factory is opperational";
    }
    if (factories >= 10) {
        document.getElementById("10fac").textContent = "huge production";
    }
    if (factories >= 50) {
        document.getElementById("50fac").textContent = "earth = factory now";
    }
    if (reactors >= 1) {
        document.getElementById("1reactor").textContent = "quantumized points";
    }
    if (reactors >= 10) {
        document.getElementById("10reactor").textContent = "quantumized points (why does this make me think about cookies?)";
    }
    if (reactors >= 50) {
        document.getElementById("50reactor").textContent = "quantumized points OVERLOAD!!!";
    }
    if (alcam >= 1) {
        document.getElementById("1alcam").textContent = "alchemy is real";
    }
    if (alcam >= 10) {
        document.getElementById("10alcam").textContent = "ten labs, are u serious?";
    }
    if (alcam >= 50) {
        document.getElementById("50alcam").textContent = "philosophic clicks?";
    }
    if (grandmas >= 1) {
        document.getElementById("1grandma").textContent = "RIP Grandma";
    }
    if (grandmas >= 10) {
        document.getElementById("10grandma").textContent = "raining cicks (thanks grandma)";
    }
    if (grandmas >= 50) {
        document.getElementById("50grandma").textContent = "heavanly clicks";
    }
};
function giveDailyReward() {
    let today = new Date().toDateString();
    let lastReward = localStorage.getItem("lastRewardDate");

    if (lastReward !== today) {
        // Give reward only once per day
        score += 500;

        // Update UI
        button.textContent = score;

        // Save
        localStorage.setItem("score", score);
        localStorage.setItem("lastRewardDate", today);

        // Show popup
        showDailyPopup();
    }
}
function showDailyPopup() {
    const pop = document.createElement("div");
    pop.textContent = "🎁 Daily Reward: +500 Points!";
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
}

if (auto > 0 || generators > 0 || factories > 0 || reactors > 0 || grandmas > 0) {
    startAutoClicker();
}

function checkOfflineEarnings() {
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
    let mybtn = document.getElementById("myButton").textContent
    mybtn.textContent += earned


}

checkOfflineEarnings();

function spawnParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 30
        });
    }
}


function playClickSound() {
    document.getElementById("clickSound").play();
}
document.getElementById("mainCSS").addEventListener("error", function () {
    const err = document.createElement("div");
    err.textContent = "⚠️ ERROR 404: btnclk.css failed to load! currently using temporay fix.";
    err.style.position = "fixed";
    err.style.top = "20px";
    err.style.left = "50%";
    err.style.transform = "translateX(-50%)";
    err.style.background = "#ff4444";
    err.style.color = "white";
    err.style.padding = "15px 25px";
    err.style.borderRadius = "10px";
    err.style.fontSize = "18px";
    err.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    err.style.zIndex = "99999";

    document.body.appendChild(err);

    setTimeout(() => {
        err.style.transition = "opacity 1s";
        err.style.opacity = "0";
        setTimeout(() => err.remove(), 1000);
    }, 2500);
});
function calculatePrestigeRequirement() {
    return 10000 * (prestigelvl + 1);
}

function prestige() {
}

function updatePrestigeUI() {
    document.getElementById("prestigeInfo").textContent =
        "Prestige Multiplier: x" + prestigeMult;
    document.getElementById("prestigeBtn").textContent =
        "Prestige (Requires " + calculatePrestigeRequirement() + ")";
}

// Modify click function
function addPoint() {
    animateButton();
    playClickSound();
    score += (1 + upgrades) * prestigeMult;
    updateScore();
}
let lastOnline = Date.now();

window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastOnline", Date.now());
    localStorage.setItem("score", score);
});
checkAchivements(); // Check achievements on load
giveDailyReward(); // Give daily reward if applicable
function showMissingSoundPopup() {
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
}
button.addEventListener("click", (e) => {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
});
document.addEventListener("click", (e) => {
    spawnParticles(e.clientX, e.clientY);
});
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
//check if cavas initialized

if (!canvas || !ctx) {
    console.error("Canvas not initialized");
}

function BonusButtonOverTime() {
    setTimeout(() => {
        bonusBtn.style.display = "none";
        spawnBonusButton();
        //make function stop if button was clicked
        if (bonusBtn.style.display === "none") {
            return;
        }
    }, 20000);
}

function spawnBonusButton() {
    setTimeout(() => {
        bonusBtn.style.display = "block";
        const plus = Math.floor(Math.random() * Math.max(1, score) * 2) + 100;
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
            } else {
                bonusBtn.onclick = function () {
                    bonusBtn.style.display = "none";
                    score += plus;
                    button.textContent = score;
                    spawnBonusButton();
                };
            }
        }, 1000);
    }, 100000);
}

spawnBonusButton();