/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {

        //Creating an array of 10 random numbers
        var randonNumbers = [];
        for (var i=0; i < 10; i++) {
            randonNumbers.push(Math.floor(Math.random() * 100))
        }
        //Dipslay the array
        var html = "<table>";
        html+="<tr>";
        for (var i = 0; i < randonNumbers.length; i++) {
            html+="<td>"+randonNumbers[i]+"</td>";
        }
        html+="</tr>";
        html+="</table>";
        document.getElementById("data").innerHTML = html;

        //Definition list
        //Smallest
        var minimum = Math.min(...randonNumbers);
        document.getElementById("min").innerHTML = minimum;
        //biggest
        var maximum = Math.max(...randonNumbers);
        document.getElementById("max").innerHTML = maximum;
        //Sum
        var sum = randonNumbers.reduce((a, b) => a + b, 0);
        document.getElementById("sum").innerHTML = sum;
        //average
        var average = sum / randonNumbers.length;
        document.getElementById("average").innerHTML = average;

    });


    // your code here

})();
