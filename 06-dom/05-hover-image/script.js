/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var imageHover = document.getElementById("hover");
    imageHover.addEventListener("mouseover", func, false);
    imageHover.addEventListener("mouseout", func1, false);

    var imgSource = imageHover.getAttribute("src");
    var hoverElement = imageHover.getAttribute("data-hover");


    function func() {
        imageHover.setAttribute("src", hoverElement);
    }

    function func1() {
        imageHover.setAttribute("src", imgSource);
    }


})();




