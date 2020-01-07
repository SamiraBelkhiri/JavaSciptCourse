/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function () {

    var a = 460;
    var x = 0;
    var i = 0;
    var s = 0;

    var meh = "00";
    var sassy = "00";
    var bleh = "00";

    document.getElementById("part-one").addEventListener("click", function () {

        if (a < 499) {
            a++
        }
        console.log(a);
        document.getElementById('target').innerHTML = "+" + a + meh + sassy + bleh;
    });


    document.getElementById("part-two").addEventListener("click", function () {
        if (x < 99) {
            meh = x++;
            if (x < 10) {
                meh = "0" + x;
            } else {
                meh = x;
            }
        }
        console.log(x);
        document.getElementById('target').innerHTML = "+" + a + meh + sassy + bleh;
    });


    document.getElementById("part-three").addEventListener("click", function () {
        if (i < 99) {
            sassy = i++;
            if (i < 10) {
                sassy = "0" + i;
            } else {
                sassy = i
            }
        }
        console.log(i);
        document.getElementById('target').innerHTML = "+" + a + meh + sassy + bleh;

    });


    document.getElementById("part-four").addEventListener("click", function () {

        bleh = s++;
        if (s > 99) {
        }
        if (s < 10) {
            bleh = "0" + s;
        } else {
            bleh = s;
        }
        console.log(s);
        document.getElementById('target').innerHTML = "+" + a + meh + sassy + bleh;

    });



        /* function incrementValue()
         {
             var value = parseInt(document.getElementById('number').value, 10);
             value = isNaN(value) ? 0 : value;
             value++;
             document.getElementById('number').value = value;
         }
     */
/*
    var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }
*/


  /*  var i = 0;

    function incNumber() {
        if (i < 460) {
            i++;
        } else if (i = 460) {
            i = 0;
        }
        document.getElementById("part-one").innerHTML = i;
    }

    function decNumber() {
        if (i > 499) {
            --i;
        } else if (i = 499) {
            i = 10;
        }
        document.getElementById("part-one").innerHTML = i;
    }
    */



    // your code here

})();
