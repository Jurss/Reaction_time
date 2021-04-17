let start = document.getElementById('btn-start');

let count = document.getElementById('count');
let count1 = document.getElementById('count1');
let count2 = document.getElementById('count2');
let count3 = document.getElementById('count3');
let count_Go = document.getElementById('count_Go');

let case1 = document.getElementsByClassName('case1');
let case2 = document.getElementsByClassName('case2');
let case3 = document.getElementsByClassName('case3');
let case4 = document.getElementsByClassName('case4');
let case5 = document.getElementsByClassName('case5');
let case6 = document.getElementsByClassName('case6');
let case7 = document.getElementsByClassName('case7');
let case8 = document.getElementsByClassName('case8');
let case9 = document.getElementsByClassName('case9');
let case10 = document.getElementsByClassName('case10');
let case11 = document.getElementsByClassName('case11');
let case12 = document.getElementsByClassName('case12');
let case13 = document.getElementsByClassName('case13');
let case14 = document.getElementsByClassName('case14');
let case15 = document.getElementsByClassName('case15');
let case16 = document.getElementsByClassName('case16');

let delay_1S = 1000;
let randomCase = 0;
let goGame = false;

//count before lauch the game
start.addEventListener('click', () => {
    count3.style.display = "block";
    setTimeout(function() {
        count3.style.display = "none";
        count2.style.display = "block";
        setTimeout(function() {
            count2.style.display = "none";
            count1.style.display = "block";
            setTimeout(function() {
                count1.style.display = "none";
                count_Go.style.display = "block";
                setTimeout(function() {
                    count_Go.style.display = "none";
                    selectCase();
                }, delay_1S);
            }, delay_1S);
        }, delay_1S);
    }, delay_1S);


});

function getRandomNb() {
    return Math.floor(Math.random() * 16);
};


function selectCase() {


    randomCase = getRandomNb();
    if (randomCase === 0) {
        case1[0].style.background = "green";
        case1[0].style.cursor = "pointer";

        case1[0].addEventListener('click', next1, { once: true });
    } else if (randomCase === 1) {
        case2[0].style.background = "green";
        case2[0].style.cursor = "pointer";

        case2[0].addEventListener('click', next2, { once: true });
    } else if (randomCase === 2) {
        case3[0].style.background = "green";
        case3[0].style.cursor = "pointer";

        case3[0].addEventListener('click', next3, { once: true });
    } else if (randomCase === 3) {
        case4[0].style.background = "green";
        case4[0].style.cursor = "pointer";

        case4[0].addEventListener('click', next4, { once: true });
    } else if (randomCase === 4) {
        case5[0].style.background = "green";
        case5[0].style.cursor = "pointer";

        case5[0].addEventListener('click', next5, { once: true });
    } else if (randomCase === 5) {
        case6[0].style.background = "green";
        case6[0].style.cursor = "pointer";

        case6[0].addEventListener('click', next6, { once: true });
    } else if (randomCase === 6) {
        case7[0].style.background = "green";
        case7[0].style.cursor = "pointer";

        case7[0].addEventListener('click', next7, { once: true });
    } else if (randomCase === 7) {
        case8[0].style.background = "green";
        case8[0].style.cursor = "pointer";

        case8[0].addEventListener('click', next8, { once: true });
    } else if (randomCase === 8) {
        case9[0].style.background = "green";
        case9[0].style.cursor = "pointer";

        case9[0].addEventListener('click', next9, { once: true });
    } else if (randomCase === 9) {
        case10[0].style.background = "green";
        case10[0].style.cursor = "pointer";

        case10[0].addEventListener('click', next10, { once: true });
    } else if (randomCase === 10) {
        case11[0].style.background = "green";
        case11[0].style.cursor = "pointer";

        case11[0].addEventListener('click', next11, { once: true });
    } else if (randomCase === 11) {
        case12[0].style.background = "green";
        case12[0].style.cursor = "pointer";

        case12[0].addEventListener('click', next12, { once: true });
    } else if (randomCase === 12) {
        case13[0].style.background = "green";
        case13[0].style.cursor = "pointer";

        case13[0].addEventListener('click', next13, { once: true });
    } else if (randomCase === 13) {
        case14[0].style.background = "green";
        case14[0].style.cursor = "pointer";

        case14[0].addEventListener('click', next14, { once: true });
    } else if (randomCase === 14) {
        case15[0].style.background = "green";
        case15[0].style.cursor = "pointer";

        case15[0].addEventListener('click', next15, { once: true });
    } else if (randomCase === 15) {
        case16[0].style.background = "green";
        case16[0].style.cursor = "pointer";

        case16[0].addEventListener('click', next16, { once: true });
    }
};

function next1() {
    case1[0].style.background = "#FFFFFF";
    selectCase();
}

function next2() {
    case2[0].style.background = "#FFFFFF";
    selectCase();
}

function next3() {
    case3[0].style.background = "#FFFFFF";
    selectCase();
}

function next4() {
    case4[0].style.background = "#FFFFFF";
    selectCase();
}

function next5() {
    case5[0].style.background = "#FFFFFF";
    selectCase();
}

function next6() {
    case6[0].style.background = "#FFFFFF";
    selectCase();
}

function next7() {
    case7[0].style.background = "#FFFFFF";
    selectCase();
}

function next8() {
    case8[0].style.background = "#FFFFFF";
    selectCase();
}

function next9() {
    case9[0].style.background = "#FFFFFF";
    selectCase();
}

function next10() {
    case10[0].style.background = "#FFFFFF";
    selectCase();
}

function next11() {
    case11[0].style.background = "#FFFFFF";
    selectCase();
}

function next12() {
    case12[0].style.background = "#FFFFFF";
    selectCase();
}

function next13() {
    case13[0].style.background = "#FFFFFF";
    selectCase();
}

function next14() {
    case14[0].style.background = "#FFFFFF";
    selectCase();
}

function next15() {
    case15[0].style.background = "#FFFFFF";
    selectCase();
}

function next16() {
    case16[0].style.background = "#FFFFFF";
    selectCase();
}