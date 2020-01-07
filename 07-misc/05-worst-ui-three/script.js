/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {

    var boo = "460";
    var meh = "00";
    var sassy = "00";
    var bleh = "00";

    var speed = 100;
    var speed2 = 80;
    var setSonic = setInterval(sonic, speed);
    var setTails = setInterval(tails, speed2);
    var setKnuckles = setInterval(knuckles, speed);
    var setAmy = setInterval(amy, speed2);

    function sonic() {
        var mario = Math.floor(Math.random() * (499 - 460) + 460);
        document.getElementById("part-one").setAttribute("value", mario);
    }

    function tails() {
        var wario = Math.floor(Math.random() * 100);
        document.getElementById("part-two").setAttribute("value", wario);
    }

    function knuckles () {
        var luigi = Math.floor(Math.random() * 100);
        document.getElementById("part-three").setAttribute("value", luigi);
    }

    function amy () {
        var toad = Math.floor(Math.random() * 100);
        document.getElementById("part-four").setAttribute("value", toad);
    }


    document.getElementById("fix-part-one").addEventListener("click", function () {
        clearInterval(setSonic);
        boo = document.getElementById("part-one").getAttribute("value");
        document.getElementById('target').innerHTML = "+" +boo + meh + sassy + bleh;
    });


    document.getElementById("fix-part-two").addEventListener("click",function () {
    clearInterval(setTails);
    meh = meh = document.getElementById("part-two").getAttribute("value");
        if (meh < 10) {
    meh ="0" + meh
    }
    document.getElementById("target").innerHTML = "+" + boo + meh + sassy +bleh;
    });

    document.getElementById("fix-part-three").addEventListener("click", function () {
        clearInterval(setKnuckles);
        sassy = document.getElementById("part-three").getAttribute("value");
        if (sassy < 10) {
            sassy = "0" + sassy
        }
        document.getElementById("target").innerHTML = "+" + boo + meh + sassy + bleh;

    });

    document.getElementById("fix-part-four").addEventListener("click", function (){
        clearInterval(setAmy);
        bleh = document.getElementById("part-four").getAttribute("value");
        if (bleh < 10){
            bleh = "0" + bleh}
        document.getElementById("target").innerHTML = "+" + boo + meh + sassy + bleh;

    });

    })();









