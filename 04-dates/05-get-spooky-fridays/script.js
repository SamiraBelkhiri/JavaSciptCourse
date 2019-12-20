/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
// when you click
    document.getElementById("run").addEventListener("click", function(){

        // get value
        var value = document.getElementById("year").value;
        var d= new Date();
        // check for 13 in the setfullyear
        d.setFullYear(value, 0,13);
    // empty array to push answer to alert message in the web page
         var months=[];
        const mon =["January","February","March","April","May","June","July","August","September","October","November","December"];

        for (var m=0; m <= 11;m++){

            d.setMonth(m);
// gets friday to push it to the alert (in the array)
            if ( d.getDay() === 5){
                months.push(mon[m])
            }
        }

        alert(months);




    })

})();
