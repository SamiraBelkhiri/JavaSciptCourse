/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var count = 0;

/*
// JQuery way
$('#increment').click(function (e) {
    e.preventDefault();
    count++;
});
// YUI way
YAHOO.util.Event.on('increment', 'click', function (e) {
    YAHOO.util.Event.preventDefault(e);
    count++;
});

*/

// Simple way
document.getElementById('increment').onclick = function (e) {
    count++;
    console.log(count);

    localStorage.setItem("pressed", count);
    console.log(localStorage.getItem("pressed"));
    console.log(count);

    document.getElementById("target").innerHTML = localStorage.getItem("pressed");


  /*  if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
    */
};