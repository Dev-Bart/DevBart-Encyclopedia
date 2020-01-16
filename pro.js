//Get the button: //BLOK KODU DLA BUTTONA WRACAJĄCEGO NA GÓRE!
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let slides = document.getElementsByClassName("slide");
let index = 0;
    function goLeft() {
        if(index == 0) index = slides.length - 1;
        else index--;

        slides[0].style.marginLeft = "-" + index + 700 + "px";
    }

    function goRight() {
        if(index ==  slides.length -1) index = 0;
        else index++;

        slides[0].style.marginRight = "-" + index + 700 + "px";
    }

    setInterval(goRight,5000); //1000=1s auto-navigation

    console.log('wtf');