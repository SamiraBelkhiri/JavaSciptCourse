/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// need to know my localhost for the api
/*
(() => {
document.getElementById("run").addEventListener("click", function () {

    fetch("./api.json")
        .then(response => {
            return response.json()
        })
        .then(function (data) {
            let names = data.heroes;
            names.forEach(function (element) {
                console.log(element.name);
            })
        })
        .catch(err=> {
        console.log("error")
        })
});

        })();


*/


/*
(function () {



    document.getElementById("run").addEventListener("click", function () {
        fetch('http://localhost:12345/api.json')
            .then(response => response.json())

            .then (data => console.log(data))
            });



})();
*/
