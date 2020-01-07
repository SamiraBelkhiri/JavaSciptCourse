/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// random value generated
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submitguess").onclick = function(){

    // number guessed by user
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if(x > y) /* if guessed number is greater
                   than actual number*/
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}    // random value generated
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submitguess").onclick = function(){

    // number guessed by user
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if(x > y) /* if guessed number is greater
                   than actual number*/
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}
