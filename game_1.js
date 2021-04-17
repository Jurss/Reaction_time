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
                }, delay_1S);
            }, delay_1S);
        }, delay_1S);
    }, delay_1S);

});