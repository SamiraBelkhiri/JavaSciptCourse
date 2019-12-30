/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function addTable() {
        var myTableDiv = document.getElementById("target");

        var table = document.createElement('TABLE');
        table.border = '1';

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        for (var i = 0; i < 1; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (var j = 0; j < 10; j++) {
                var td = document.createElement('TD');
                td.width = '75';

                tr.appendChild(td);
            }
        }
        myTableDiv.appendChild(table);
    }
    addTable();

    // your code here

})();
