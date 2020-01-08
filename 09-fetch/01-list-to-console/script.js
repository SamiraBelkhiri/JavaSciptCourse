/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function () {
        fetch('http://localhost:12345/api.json')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
            });


    })

})();
