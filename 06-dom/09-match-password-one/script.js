/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.





    document.getElementById("run").addEventListener("click",checkPassword);


    // Function to check Whether both passwords
    // is same or not.
    function checkPassword(form) {

     var passOne = document.getElementById("pass-one").value;
       var passTwo = document.getElementById("pass-two").value;

        // If password not entered
        if (passOne===''){
            alert ("Please enter Password");
}
        // If confirm password not entered
        else if (passTwo===''){
            alert ("Please enter confirm password");
}
        // If Not same return False.
        else if (passOne!==passTwo){
            alert ("\nPassword did not match: Please try again...");
            document.getElementById("pass-one").style.borderColor="red";

            return false;

        }

        // If same return True.
        else{
            alert("Password Match: Welcome to Becode!");
            return true;
        }


        // your code here

}
