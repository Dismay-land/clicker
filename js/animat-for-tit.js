let animOn = 0

//make sure the animation does not play if it's already playing
if (animOn === 0) {

    // if yes, play animation
    title.onclick = function () {
        // set variable to 1 for debug purposes
        animOn = 1
        if (innerWidth > 600) {
            //run animation
            title.style.backgroundColor = "red";
            if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
            else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
            setTimeout(() => {
                // size down
                if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
                else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
                title.textContent = "+1";
                title.style.borderRadius = "0";
                title.style.width = "fit-content";
                title.style.height = "auto";
                title.style.padding = "3px 12px";
                title.style.fontSize = "14px";
                setTimeout(() => {
                    // size up
                    if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
                    else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
                    title.style.marginLeft = "45%";
                    title.style.borderRadius = "0";
                    title.style.width = "fit-content";
                    title.style.height = "auto";
                    title.style.padding = "5px 15px";
                    title.style.fontSize = "50px";
                    setTimeout(() => {
                        //reset
                        title.style.padding = "3px 13px";
                        title.style.fontSize = "30px";
                        title.style.marginLeft = "40%";
                        if (dark == 0) { // set to defult if dark mode is off
                            title.style.boxShadow = "0 0 12px 4px rgb(250, 255, 0)";
                            title.style.backgroundColor = "rgb(250,255,0)";
                        }
                        else { // other wise make it black
                            title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)";
                            title.style.backgroundColor = "rgb(0, 0, 0)";
                        }
                        title.style.width = "fit-content";
                        title.style.height = "auto";
                        title.textContent = "Button Clicker";
                        // reset variable back to 0
                        animOn = 0
                    }, 500);
                }, 200);
            }, 10);
        }
        else {
            // play animation that fits into the screen
            animOn = 1

            //run animation
            title.style.backgroundColor = "red";
            if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
            else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
            setTimeout(() => {
                // size down
                if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
                else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
                title.style.marginLeft = "35%";
                title.textContent = "+1";
                title.style.borderRadius = "0";
                title.style.width = "fit-content";
                title.style.height = "auto";
                title.style.padding = "3px 12px";
                title.style.fontSize = "14px";
                setTimeout(() => {
                    // size up
                    if (dark == 0) title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)"; // Keep box shadow red if dark mode is disabled
                    else title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)"; // other wise make it black
                    title.style.marginLeft = "30%";
                    title.style.borderRadius = "0";
                    title.style.width = "fit-content";
                    title.style.height = "auto";
                    title.style.padding = "5px 15px";
                    title.style.fontSize = "50px";
                    setTimeout(() => {
                        //reset
                        title.style.padding = "3px 13px";
                        title.style.fontSize = "30px";
                        title.style.marginLeft = "25%";
                        if (dark == 0) { // set to defult if dark mode is off
                            title.style.boxShadow = "0 0 12px 4px rgb(250, 255, 0)";
                            title.style.backgroundColor = "rgb(250,255,0)";
                        }
                        else { // other wise make it black
                            title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)";
                            title.style.backgroundColor = "rgb(0, 0, 0)";
                        }
                        title.style.width = "fit-content";
                        title.style.height = "auto";
                        title.textContent = "Button Clicker";
                        // 250, 255, 0
                        // reset variable back to 0
                        animOn = 0
                    }, 500);
                }, 200);
            }, 10);

        }
    };
};
title.onmouseenter = function () {
    if (animOn === 0) {
        title.style.backgroundColor = "red";
        if (dark == 0) { // set to defult if dark mode is off
            title.style.boxShadow = "0 0 12px 4px rgb(255, 0, 0)";
            title.style.backgroundColor = "rgb(255, 0, 0)";
        }
        else { // other wise make it black
            title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)";
            title.style.backgroundColor = "rgb(0, 0, 0)";
        }
        title.style.marginLeft = "35%";
        title.style.borderRadius = "0";
        title.style.width = "fit-content"
        title.style.height = "auto";
        title.style.padding = "5px 15px";
        title.style.fontSize = "50px";
    }
    else {
        return;
    };
};
title.onmouseleave = function () {
    if (animOn === 0) {
        title.style.padding = "3px 13px";
        title.style.fontSize = "30px";
        if (innerWidth > 600) {
            title.style.marginLeft = "40%";
        }
        else {
            title.style.marginLeft = "25%";
        }
        if (dark == 0) { // set to defult if dark mode is off
            title.style.boxShadow = "0 0 12px 4px rgb(250, 255, 0)";
            title.style.backgroundColor = "rgb(250,255,0)";
        }
        else { // other wise make it black
            title.style.boxShadow = "0 0 12px 4px rgb(0, 0, 0)";
            title.style.backgroundColor = "rgb(0, 0, 0)";
        }
        title.style.width = "fit-content";
        title.style.height = "auto";
    }
    else {
        return;
    };
};