// load all constan variable elements
const button = document.getElementById("myButton");
const levelBtn = document.getElementById("ok");
const input = document.getElementById("myInput");
const display = document.getElementById("levelDisplay");
const costDisplay = document.getElementById("cost");
const resetBtn = document.getElementById("resetBtn");
const saveBtn = document.getElementById("save");
const buyAuto = document.getElementById("clicker");
const autoInfo = document.getElementById("clickertxt");
const genBtn = document.getElementById("genBtn");
const genTxt = document.getElementById("genTxt");
const facBtn = document.getElementById("facBtn");
const facTxt = document.getElementById("facTxt");
const reactBtn = document.getElementById("reactBtn");
const reactTxt = document.getElementById("reactTxt");
const grandmaBtn = document.getElementById("grandma");
const grandmaTxt = document.getElementById("grandmatxt");
const totclk = document.getElementById("totclk");
const settingsBtn = document.getElementById("settings");
const settingsMenu = document.getElementById("settingsMenu");
const prestigeBtn = document.getElementById("prestigeBtn");
const prestigeInfo = document.getElementById("prestigeInfo");
const afordable = document.getElementById("aford");
const darkModeBtn = document.getElementById("dark");
const alcamBtn = document.getElementById("alcam");
const alcamTxt = document.getElementById("alctxt");
const GpaBtn = document.getElementById('grandpa');
const GpaTxt = document.getElementById('pa-txt')
const versBtn = document.getElementById("vers");
const versDiv = document.getElementById("versdiv");
const bonusclkBtn = document.getElementById("bonusclk");
const bnsclkTXT = document.getElementById("bnsclkTXT");
const cloudSaveBtn = document.getElementById("cloudSave");
const loadSaveBtn = document.getElementById("loadSave");
const inputLoadSave = document.getElementById("inputLoadSave");
const enterSaveBtn = document.getElementById("enterSave");
const savetxt = document.getElementById("savetxt");
const shopDiv = document.getElementById("shop");
const shopBtn = document.getElementById("shopBtn");
const autolevel = document.getElementById("autoLvl");
const autolvlTXT = document.getElementById("alvTXT");
const title = document.getElementById("title");
const twoFingers = document.getElementById("2fing");
const twoFingTXT = document.getElementById("2fingTXT");
const bonusBtn = document.getElementById("bonusBtn");
const buffDiv = document.getElementById("buffDiv");
const buffBtn = document.getElementById("buff");
const menuDiv = document.getElementById("menus");
const menuBtn = document.getElementById("showMenus");
const rec = document.getElementById('rec');

// preapare canvas
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// main variables
let score = Number(localStorage.getItem("score")) || 0;
let cost = Number(localStorage.getItem("cost")) || 100;
let clicks = Number(localStorage.getItem("clicks")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

// upgrade variables
let auto = Number(localStorage.getItem("auto")) || 0;
let autoCost = Number(localStorage.getItem("autoCost")) || 500;
let autoActive = false;
let generators = Number(localStorage.getItem("generators")) || 0;
let generatorCost = Number(localStorage.getItem("generatorCost")) || 1000;
let factories = Number(localStorage.getItem("factories")) || 0;
let factoryCost = Number(localStorage.getItem("factoryCost")) || 5000;
let reactors = Number(localStorage.getItem("reactors")) || 0;
let reactorCost = Number(localStorage.getItem("reactorCost")) || 25000;
let grandmas = Number(localStorage.getItem("grandmas")) || 0;
let grandmaCost = Number(localStorage.getItem("grandmaCost")) || 10000000;
let alcam = Number(localStorage.getItem("alcam")) || 0;
let alcamCost = Number(localStorage.getItem("alcamCost")) || 100000;
let Gpa = Number(localStorage.getItem('gpa')) || 500000;
let Gpacost = Number(localStorage.getItem('gpaCost')) || 1000000;

// prestige variables
let prestigelvl = Number(localStorage.getItem("prestigeBtn")) || 0;
let prestigeMult = Number(localStorage.getItem("prestigeInfo")) || 1.0;

// toggles
let soundOn = document.getElementById("soundToggle");
let autolvlON = document.getElementById("autoLvlOn");
let dark = 0;

// features and buffs
let bonusfeat = Number(localStorage.getItem("bonusBtn")) || 0; // 0 = not owned
let lvlfeat = Number(localStorage.getItem("autoLvl")) || 0; // 0 = not owned
let twofingOwn = Number(localStorage.getItem("2finger")) || 0; // 0 = not owned

// unclassified (yet)
let luckACH = Number(localStorage.getItem("luck")) || 0; // 0 = not owned
let prestigePermit = 0;
let upgrades = (auto * 1) + (generators * 5) + (factories * 25) + (reactors * 100) + (alcam * 10000) + (grandmas * 1000000);
let autoBoost = 0;
let particles = [];
let amount = parseInt(input.value, 10) || 1;
let plus = "";
let giveAmount = Math.floor(Math.random() * Math.max(1, score)) + 100;
prestigeMult = Math.round(prestigeMult);

// NaN debuger
if (isNaN(score)) score = 0;
if (isNaN(level)) level = 1;
if (isNaN(auto)) auto = 0;
if (isNaN(generators)) generators = 0;
if (isNaN(factories)) factories = 0;
if (isNaN(reactors)) reactors = 0;
if (isNaN(grandmas)) grandmas = 0;

// main constant variable values
button.textContent = score;
display.textContent = "Level: " + level;
costDisplay.textContent = "Cost for next level: " + (level * amount * 100);
totclk.textContent = "total clicks: " + clicks;
afordable.textContent = (score >= cost) ? "afordable" : "not afordable";

//upgrade variable values
buyAuto.textContent = "Auto-clicker (" + autoCost + " points)";
autoInfo.textContent = "You have " + auto + " auto-clickers";
genBtn.textContent = "Generator (" + generatorCost + " points)";
facBtn.textContent = "Factory (" + factoryCost + " points)";
reactBtn.textContent = "Quantum Reactor (" + reactorCost + " points)";
genTxt.textContent = "You have " + generators + " generators";
facTxt.textContent = "You have " + factories + " factories";
reactTxt.textContent = "You have " + reactors + " reactors";
grandmaBtn.textContent = "RIP Grandma... (" + grandmaCost + " points)";
grandmaTxt.textContent = "You have " + grandmas + " Grandmas";
alcamBtn.textContent = "Alchemy Lab (" + alcamCost + " points)";
alcamTxt.textContent = "You have " + alcam + " alchey labs";
GpaBtn. textContent = 'Grandpa (' + Gpacost + ' points';
GpaTxt.textContent = 'you have ' + Gpa + ' Grandpa\'s'

// unclassified
shopDiv.style.display = "none";
prestigeInfo.textContent = "Prestige Multiplier: x" + prestigeMult.toFixed(1);
const howMany = document.getElementById("howMany");

// give cost variables values
autoCost.textContent = 500 * Math.pow(1.15, auto);
generatorCost.textContent = 1000 * Math.pow(1.15, generators);
factoryCost.textContent = 5000 * Math.pow(1.15, factories);
reactorCost.textContent = 25000 * Math.pow(1.15, reactors);
grandmaCost.textContent = 10000000 * Math.pow(1.15, grandmas);
alcamCost.textContent = 100000 * Math.pow(1.15, alcam);

document.onclick = function () {
    plus = level * prestigeMult;
    if (twofingOwn === 1) {
        plus *= 2;
    }
    howMany.textContent = "click = +" + plus + " points!"
};

// 'if' statments
if (bonusfeat === 1) {
    bonusclkBtn.disabled = true
    bnsclkTXT.textContent = "you now own this feature, go and relax.";

} else {
    bonusclkBtn.style.display = "flex";
    bnsclkTXT.textContent = "buying this feature will click all the bonus buttons so you don't miss anything!";
};
if (lvlfeat === 1) {
    autolevel.disabled = true;
    autolvlTXT.textContent = "you now own this feature, let's see how much points you saved for this moment!.";
    autolvlON.style.display = "block"

} else {
    autolevel.style.display = "flex";
    autolvlTXT.textContent = "buying this feature automaticly levels you up when it's afordable";
    autolvlON.style.display = "none"
    autolvlON.value = "off"
};
if (twofingOwn === 1) {
    twoFingers.disabled = true;
    twoFingers.textContent = "2 fingers (owned)";
    twoFingTXT.textContent = 'you own this feature, now you\'re twice as powerfull!'
} else {
    twoFingers.style.display = "flex";
};
// check if all achivements unlocked
const allAchievementsUnlocked =
    clicks >= 25000 && auto >= 100 && generators >= 100 &&
    factories >= 100 && reactors >= 100 && alcam >= 100 && grandmas >= 100;
if (allAchievementsUnlocked) {
    prestigePermit = 1;
};
console.log("%cHEY, WAIT!", "color: #F00; font-size: 50px; -webkit-text-stroke: 1px black; font-weight:bold"),
    console.log("don't copy-paste code into the console if you don't know what it does. doing so may grant them accses to your game files or worst case scenario, hack your account!")