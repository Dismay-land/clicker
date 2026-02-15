const tutoBtn = document.getElementById("tuto");

tutoBtn.addEventListener("click", function () {
    if (navigator.onLine) {
        document.body.style.backgroundColor = "gray"
        const div = document.createElement("div");
        if (window.innerHeight >= 600 && window.innerWidth >= 400) {
            div.style.position = "absolute";
            div.textContent = "⬅ click the button"
            div.style.left = "300px";
            div.style.top = "80px"
            div.style.display = "flexk";
            div.style.width = "100px";
            div.style.height = "50px";
            div.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
            div.style.backgroundColor = "green";
        }
        else {
            div.style.position = "absolute";
            div.textContent = "⬅ click the button"
            div.style.left = "170px";
            div.style.top = "80px"
            div.style.display = "flex";
            div.style.width = "100px";
            div.style.height = "50px";
            div.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
            div.style.backgroundColor = "green";
        }
        document.body.appendChild(div);
        //waits until button is clicked
        button.addEventListener("click", function () {
            div.remove();
            const achDiv = document.createElement("div");
            if (window.innerHeight >= 600 && window.innerWidth >= 400) {
                achDiv.style.position = "absolute";
                achDiv.textContent = "⬅ achievments show up when you complete something (click me to continiue)";
                achDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                achDiv.style.left = "150px";
                achDiv.style.bottom = "70px"
                achDiv.style.display = "flex";
                achDiv.style.width = "350px";
                achDiv.style.height = "50px";
                achDiv.style.backgroundColor = "green";
            }
            else {
                achDiv.style.position = "absolute";
                achDiv.textContent = "⬅ achievments show up when you complete something (click me to continiue)";
                achDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                achDiv.style.left = "150px";
                achDiv.style.bottom = "10px"
                achDiv.style.display = "flex";
                achDiv.style.width = "350px";
                achDiv.style.height = "50px";
                achDiv.style.backgroundColor = "green";
            }
            document.body.appendChild(achDiv);
            achDiv.onclick = function () {
                achDiv.remove();
                const mDiv = document.createElement("div");
                if (window.innerHeight >= 600 && window.innerWidth >= 400) {
                    mDiv.style.position = "fixed";
                    mDiv.textContent = "➡️ these are the menus, the settings control the save game, export, and dark mode. everything else is self explanitory. click me to continiue";
                    mDiv.style.right = "150px";
                    mDiv.style.top = "50px";
                    mDiv.style.display = "flex";
                    mDiv.style.width = "300px";
                    mDiv.style.height = "100px";
                    mDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                    mDiv.style.backgroundColor = "green";
                }
                else {
                    mDiv.style.position = "fixed";
                    mDiv.textContent = "these are the menus, the settings control the save game, export, and dark mode. everything else is self explanitory ⬆️. click me to continiue";
                    mDiv.style.right = "10px";
                    mDiv.style.top = "150px";
                    mDiv.style.display = "flex";
                    mDiv.style.width = "300px";
                    mDiv.style.height = "100px";
                    mDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                    mDiv.style.backgroundColor = "green";
                };
                document.body.appendChild(mDiv);
                mDiv.onclick = function () {
                    mDiv.remove();
                    const ld = document.createElement("div");
                    if (window.innerHeight >= 600 && window.innerWidth >= 400) {
                        ld.style.position = "absolute";
                        ld.textContent = "⬅ when you have enough points, level up, the more levels you have, the more points you will get per click. click me again to continiue";
                        ld.style.left = "350px";
                        ld.style.top = "130px";
                        ld.style.display = "block";
                        ld.style.width = "200px";
                        ld.style.height = "100px";
                        ld.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                        ld.style.backgroundColor = "green";
                    }
                    else {
                        ld.style.position = "absolute";
                        ld.textContent = "⬆️ when you have enough points, level up, the more levels you have, the more points you will get per click. click me again to continiue";
                        ld.style.left = "10px";
                        ld.style.top = "170px";
                        ld.style.display = "block";
                        ld.style.width = "200px";
                        ld.style.height = "100px";
                        ld.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                        ld.style.backgroundColor = "green";
                    }
                    document.body.appendChild(ld);
                    ld.onclick = function () {
                        ld.remove();
                        const secretDiv = document.createElement('div')
                        if (window.innerHeight >= 600 && window.innerWidth >= 400) {
                            secretDiv.style.position = "absolute";
                            secretDiv.textContent = "there is a bug that gets you free points by typing '571' in the input beside the level. so if your new, try it out! click me to continiue";
                            secretDiv.style.left = "350px";
                            secretDiv.style.top = "130px";
                            secretDiv.style.display = "block";
                            secretDiv.style.width = "200px";
                            secretDiv.style.height = "100px";
                            secretDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                            secretDiv.style.backgroundColor = "green";
                        }
                        else {
                            secretDiv.style.position = "absolute";
                            secretDiv.textContent = "there is a bug that gets you free points by typing '571' in the input beside the level. so if your new, try it out! click me to continiue";
                            secretDiv.style.left = "10px";
                            secretDiv.style.top = "170px";
                            secretDiv.style.display = "block";
                            secretDiv.style.width = "200px";
                            secretDiv.style.height = "100px";
                            secretDiv.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                            secretDiv.style.backgroundColor = "green";
                        }
                        document.body.appendChild(secretDiv)
                        secretDiv.onclick = function () {
                            secretDiv.remove()
                            const rb = document.createElement("button");
                            if (window.innerHeight >= 600 && window.innerWidth >= 400) {
                                rb.style.position = "absolute";
                                rb.textContent = "click me to reload and go back to normal play";
                                rb.style.left = "50%";
                                rb.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                                rb.style.top = "50%";
                                rb.style.display = "block";
                                rb.style.width = "300px";
                                rb.style.height = "300px";
                                rb.style.backgroundColor = "green";
                            }
                            else {
                                rb.style.position = "absolute";
                                rb.textContent = "click me to reload and go back to normal play";
                                rb.style.left = "50px";
                                rb.style.boxShadow = "0 0 20px rgb(0, 215, 0)";
                                rb.style.top = "50px";
                                rb.style.display = "block";
                                rb.style.width = "300px";
                                rb.style.height = "300px";
                                rb.style.backgroundColor = "green";
                            }
                            document.body.appendChild(rb);
                            rb.onclick = function () {
                                window.location.reload();
                            };
                        }
                    };
                };
            };
        });
    } else alert("you must be online to use tutorial")
});