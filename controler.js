// import all functions
import { spawnBonusButton, autoleveler, checkAchivements, BonusButtonOverTime, giveDailyReward, playClickSound, startAutoClicker, animateParticles, checkOfflineEarnings } from './functions.js';

// prepare document
window.onload = function () {
    // make sure the site does not append a 0 to your score
    button.textContent = score;
    // check if the score is about to exceed max level
    if (level >= 9.8e+20) {
        levelBtn.disabled = true
        levelBtn.textContent = "MAX LEVEL"
        input.style.display = "none"
        costDisplay.textContent = ""
    }
};

window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastOnline", Date.now());
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
});

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

// main
button.onclick = function () {
    // define variables
    let cost = level * amount * 100;

    // play click sound only if sound is enabled
    if (soundOn.value === "on") {
        playClickSound();
    };


    // change button color randomly if dark mode is disabled
    if (dark == 0) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        button.style.boxShadow = `0 0 20px rgb(${r}, ${g}, ${b})`;
    } else {
        button.style.backgroundColor = `rgb(100, 100, 100)`;
        button.style.boxShadow = `0 0 20px rgb(100, 100, 100)`;
    }

    // main click logic
    score += level * prestigeMult * (twofingOwn === 1 ? 2 : 1);
    clicks += 1;
    button.textContent = score;
    localStorage.setItem("score", score);
    localStorage.setItem("clicks", clicks);
    // set new total clicks
    totclk.textContent = "total clicks: " + clicks;

    // check if you can afford next level
    afordable.textContent = (score >= cost) ? "afordable" : "not afordable";

    // warn player if they points aproaching infinity
    if (score >= 1e+300) {
        alert("Warning: you points are aproaching infinity! me strongly recomend you prestige soon!");
    }
    // warn players if they reach infinity
    if (isFinite(score) === false) {
        alert("ERROR: your points have reached infinity and can no longer be represented correctly. please prestige or RESET to continiue normall gameplay.");
    };
    checkAchivements();
};

input.oninput = function () {
    amount = parseInt(input.value, 10) || 1; // default = 1
    let cost = Math.abs(level * amount * 100);
    costDisplay.textContent = "Cost for next level: " + cost;
    afordable.textContent = (score >= cost) ? "afordable" : "not afordable";
    checkAchivements();
    if (!input.value.includes('-')) {
        if (input.value == 571) {
            const message = document.createElement('div')
            message.style.position = "fixed";
            message.style.top = "0";
            message.style.left = "0";
            message.style.width = "100%";
            message.style.height = "100%";
            message.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            message.style.color = "white";
            message.style.display = "flex";
            message.style.flexDirection = "column";
            message.style.justifyContent = "center";
            message.style.alignItems = "center";
            message.style.zIndex = "1000";
            message.textContent = "stick bugging in progress..."
            document.body.appendChild(message)
            setInterval(() => {
                window.location.href = "https://www.youtube.com/watch?v=fC7oUOUEEi4"
            }, 1000);
            return;
        }
        return;
    } else {
        input.value = '1';
        cost = Math.abs(level * amount * 100);
    }

};

levelBtn.onclick = function () {
    if (!input.value.includes('-')) {
        amount = parseInt(input.value, 10) || 1;// how many levels player wants
        let cost = Math.abs(level * amount * 100); // price calculation

        autoleveler();

        if (score >= cost && level <= 9.9e+20) {
            score -= cost;
            level += Math.abs(amount);

            button.textContent = score;
            display.textContent = "Level: " + level;
            let nextAmount = parseInt(input.value, 10) || 1;
            let nextCost = level * nextAmount * 100; // controll cost display after level up
            if (level >= 9.8e+20) {
                levelBtn.disabled = true
                levelBtn.textContent = "MAX LEVEL"
                input.style.display = "none"
                costDisplay.textContent = ""
            } else {
                costDisplay.textContent = "Cost for next level: " + nextCost;
            }
            localStorage.setItem("score", score);
            localStorage.setItem("level", level);
            checkAchivements();
        }
    }
};

prestigeBtn.onclick = function () {

    if (!confirm("acending now will reset all your progress, we strongly recomend you export your current save file before acending. to do so, please go to settings and click export save.")) return;
    if (!confirm("WOAH! are you sure you want to acend? this action is irreversible unless you have exported your save. Don't say I didn't warn you!")) return;
    if (score >= 10000000000 && prestigePermit) {
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
        prestigeMult *= 2;
        prestigelvl += 1;
        bonusfeat = 0;
        luckACH = 0;
        button.textContent = score;
        display.textContent = "Level: " + level;
        prestigeInfo.textContent = "Prestige Multiplier: x" + prestigeMult;
        costDisplay.textContent = "Cost for next level: " + (level * 100);
        totclk.textContent = "total clicks: " + clicks;

        checkAchivements();
        localStorage.clear();
        localStorage.setItem("bonusBtn", bonusfeat);
        localStorage.setItem("score", score);
        localStorage.setItem("level", level);
        localStorage.setItem("clicks", clicks);
        localStorage.setItem("prestigeBtn", prestigelvl);
        localStorage.setItem("prestigeInfo", prestigeMult);
        localStorage.setItem("auto", auto);
        localStorage.setItem("generators", generators);
        localStorage.setItem("factories", factories);
        localStorage.setItem("reactors", reactors);
        localStorage.setItem("grandmas", grandmas);
        localStorage.setItem("alcam", alcam);
        localStorage.setItem("autoCost", autoCost);
        localStorage.setItem("generatorCost", generatorCost);
        localStorage.setItem("factoryCost", factoryCost);
        localStorage.setItem("reactorCost", reactorCost);
        localStorage.setItem("grandmaCost", grandmaCost);
        localStorage.setItem("alcamCost", alcamCost);
        localStorage.setItem("luck", luckACH);
        localStorage.setItem("lastRewardDate", new Date().toDateString());
    }
    else if (score <= 10000000000) {
        alert("you don't have enought clicks, go mash that button!")
    } else {
        alert("you must unlock all achivements to prestige!")
    };
};

// data managment
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
    localStorage.setItem("alcam", alcam)
    localStorage.setItem("grandmas", grandmas);
    localStorage.setItem("grandmaCost", grandmaCost);
    setTimeout(afterPause, 1000); // 1000 milliseconds = 1 second
    function afterPause() {
        document.getElementById("savetxt").textContent = "";
    }
};

resetBtn.onclick = function () {
    if (!confirm("Are you SURE you want to reset?")) return;
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
    bonusfeat = 0;
    luckACH = 0;
    button.textContent = score;
    display.textContent = "Level: " + level;
    prestigeInfo.textContent = "Prestige Multiplier: x" + prestigeMult;
    costDisplay.textContent = "Cost for next level: " + (level * 100);
    totclk.textContent = "total clicks: " + clicks;

    checkAchivements();
    localStorage.clear();
    localStorage.setItem("bonusBtn", bonusfeat);
    localStorage.setItem("score", score);
    localStorage.setItem("level", level);
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("auto", auto);
    localStorage.setItem("generators", generators);
    localStorage.setItem("prestigeBtn", prestigelvl);
    localStorage.setItem("prestigeInfo", prestigeMult);
    localStorage.setItem("factories", factories);
    localStorage.setItem("reactors", reactors);
    localStorage.setItem("grandmas", grandmas);
    localStorage.setItem("alcam", alcam);
    localStorage.setItem("autoCost", autoCost);
    localStorage.setItem("generatorCost", generatorCost);
    localStorage.setItem("factoryCost", factoryCost);
    localStorage.setItem("reactorCost", reactorCost);
    localStorage.setItem("grandmaCost", grandmaCost);
    localStorage.setItem("alcamCost", alcamCost);
    localStorage.setItem("luck", luckACH);
    localStorage.setItem("lastRewardDate", new Date().toDateString());
    window.location.reload();
};

// menus
settingsBtn.onclick = function () {
    if (settingsMenu.style.display === "none") {
        settingsMenu.style.display = "block";
        if (dark == 1) settingsMenu.style.backgroundColor = "rgb(0, 0, 0)";
        else settingsMenu.style.backgroundColor = 'rgb(255, 255, 255)'
    } else {
        settingsMenu.style.display = "none";
    }
};

buffBtn.onclick = function () {
    if (buffDiv.style.display === "none") {
        buffDiv.style.display = "block";
        if (dark == 1) buffDiv.style.backgroundColor = "rgb(0, 0, 0)";
        else buffDiv.style.backgroundColor = 'rgb(255, 255, 255)'
    } else {
        buffDiv.style.display = "none";
    }
}

versBtn.onclick = function () {
    if (versDiv.style.display === "none") {
        versDiv.style.display = "block";
        if (dark == 1) versDiv.style.backgroundColor = "rgb(0, 0, 0)";
        else versDiv.style.backgroundColor = 'rgb(255, 255, 255)'
    } else {
        versDiv.style.display = "none";
    }
};

// upgrades
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

        reactorCost = Math.floor(reactorCost * 1.75);

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
        alcamCost = Math.floor(alcamCost * 1.5);

        localStorage.setItem("score", score);
        localStorage.setItem("alcam", alcam);
        localStorage.setItem("alcamCost", alcamCost);

        button.textContent = score;
        alcamBtn.textContent = "Alchemy Lab (" + alcamCost + " points)";
        alcamTxt.textContent = "You have " + alcam + " alchemy labs";

        if (!autoActive) startAutoClicker();  // <-- now works
    }
}

GpaBtn.onclick = function () {
    if (score >= Gpacost) {
        score -= Gpacost;
        Gpa++;
        Gpacost = Math.floor(Gpacost * 1.5)

        localStorage.setItem("score", score);
        localStorage.setItem("gpa", Gpa);
        localStorage.setItem("gpaCost", Gpacost);

        button.textContent = score;
        GpaBtn.textContent = 'Grandpa (' + Gpacost + "points)"
        GpaTxt.textContent = 'You have ' + Gpa + ' Grandpa\'s'

        if (!autoActive) startAutoClicker();  // <-- now works        
    }
}

// features and buffs
autolevel.onclick = function () {
    if (score >= 7000000) {
        score -= 7000000;
        lvlfeat = 1;

        localStorage.setItem("score", score);
        localStorage.setItem("autoLvl", lvlfeat);

        button.textContent = score;
        autolevel.style.display = "none";
        bnsclkTXT.textContent = "you now own this feature, go and relax.";
        checkAchivements();
    }

};

bonusclkBtn.onclick = function () {
    if (score >= 5000000) {
        score -= 5000000;
        bonusfeat = 1;

        localStorage.setItem("score", score);
        localStorage.setItem("bonusBtn", bonusfeat);

        button.textContent = score;
        bonusclkBtn.style.display = "none";
        bnsclkTXT.textContent = "you now own this feature, go and relax.";
        checkAchivements();
    }
};

twoFingers.onclick = function () {
    if (score >= 100000) {
        score -= 100000;
        button.textContent = score;
        twoFingers.style.display = "none"
        twofingOwn = 1;
        localStorage.setItem("2finger", twofingOwn)
    };
}

// function callers
if (auto > 0 || generators > 0 || factories > 0 || reactors > 0 || grandmas > 0) startAutoClicker();
animateParticles();
checkAchivements();
giveDailyReward();
checkOfflineEarnings();
checkAchivements(); // Check achievements on load
giveDailyReward(); // Give daily reward if applicable
BonusButtonOverTime();
spawnBonusButton();

// unclassfied
darkModeBtn.onclick = function () {
    if (document.body.style.backgroundColor === "rgb(207, 255, 253)") {
        document.body.style.backgroundColor = "rgb(50, 50, 50)";
        document.body.style.color = "rgb(220, 220, 220)";
        dark = 1
    } else {
        document.body.style.backgroundColor = "rgb(207, 255, 253)";
        document.body.style.color = "rgb(0, 0, 0)";
        dark = 0
    }
};

rec.onclick = function () {
    if (!confirm('ready to switch?')) return;
    window.location.href = "https://storafy.vercel.app/"
}