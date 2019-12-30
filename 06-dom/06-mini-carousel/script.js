/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

   /* function loadImagesInSequence(gallery) {
        if (!gallery.length) {
            return;
        }

        var img = new Image(),
            url = gallery.shift();

        img.onload = function(){ loadImagesInSequence(gallery) };
        img.src = url;
    }

    loadImagesInSequence(['a.png', 'b.png', 'c.png']);
*/  var i = 0;
   document.getElementById("next").addEventListener("click", myFunction);


    function myFunction() {

        var newImage = document.getElementsByTagName("img");

        if(i == gallery.length) {i= 0;}

        newImage[0].setAttribute("src", gallery[i]);
        i++;


    }


/*

if(i == gallery.length)
{
    var j = 0;
    document.getElementById(element).src = gallery[j].src;
    break;
}
else
    var j = i + 1;
document.getElementById(element).src = gallery[j].src;
break;
}
  */
    // your code here


