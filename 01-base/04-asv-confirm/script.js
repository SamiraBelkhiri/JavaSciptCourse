/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here



        let name = prompt('What is your name?');
        let age = prompt('What is your age?');
        let town = prompt("What is your town");

        // printing the age to the console
        alert(`Your name is ${name} and you are ${age} years old. Your Town is ${town}`);

        let cancel = confirm("would you like to try again");
       if (cancel == true){
            self.location = self.location;
        }




})();
