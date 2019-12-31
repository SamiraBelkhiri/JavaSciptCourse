/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("pass-one").addEventListener('keydown', function() {
  let input = document.getElementById("pass-one");
  let validInput = document.getElementById("validity");


  function CheckPassword() {

    let twoNumbers = new RegExp(".*[0-9].*[0-9]");
    return(input.value.length >= 7) && (twoNumbers.test(input.value))

    }
    if (CheckPassword()=== true){
        validInput.innerHTML = "ok";

    }else {
        validInput.innerHTML = "not ok";
    }



    });


/*

    if ( (?=.{8,}) && newRegex.test(document.getElementById("pass-one").value)) {

        document.getElementById('validity').innerHTML = "ok";
    } else {
        document.getElementById('validity').innerHTML = "not ok";
    }
*/

/*
myInput.onfocus = function() {
    document.getElementById("pass-one").style.display = "block";
}


var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
} else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}

if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
}

*/




