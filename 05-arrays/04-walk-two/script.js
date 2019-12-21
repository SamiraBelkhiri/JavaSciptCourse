/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {
        var index, len;
        var fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
      a.forEach(function (entry) {
          console.log(entry);
      });

      })


      /*
        //one way but not sure if its right
        for (index= 0, len=fruits.length; index<len; ++index){

            console.log(fruits[index]);
        }

 */
 // other way but keeps counting so needs a break
        /*
         :   var counter = 0;
            function next_word() {
                console.log(fruits [counter % fruits.length]);
                counter += 1;

            }

            setInterval(next_word, 100);
        */


// your code here

//    })();
})();