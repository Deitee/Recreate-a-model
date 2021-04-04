// var counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 3) {
//         counter = 1;
//     }
// }, 5000);

document.addEventListener("DOMContentLoaded", function() {
    var classLink = document.querySelectorAll('.link');
    var length = classLink.length;
    const navbar = document.querySelector('#navbar');
    const burger = document.querySelector('#burger');

    burger.onclick = function(){
        navbar.classList.toggle('drop');
        burger.classList.toggle('drop');
    }

    for (var i = 0; i < length; i++){
        classLink[i].onclick = function(){
            navbar.classList.toggle('drop');
            burger.classList.toggle('drop');
        }    
    }
})