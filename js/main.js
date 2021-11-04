// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(".js-video-button").modalVideo();

var header__lang = document.getElementById("header__lang");
var btns = header__lang.getElementsByClassName("header__lang_items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_lang");
  current[0].className = current[0].className.replace(" active_lang", "");
  this.className += " active_lang";
  });
}
var header__lang2 = document.getElementById("header__lang2");
var btns2 = header__lang2.getElementsByClassName("header__lang_items");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_lang2");
  current[0].className = current[0].className.replace(" active_lang2", "");
  this.className += " active_lang2";
  });
}

var modal0 = document.getElementById("main__myModal");
var btn0 = document.getElementById("main__button");
var span0 = document.getElementsByClassName("main__modal_close")[0];

btn0.onclick = function() {
  modal0.style.display = "block";
}
span0.onclick = function() {
  modal0.style.display = "none";
}
window.onclick = function(event0) {
  if (event0.target == modal0) {
    modal0.style.display = "none";
  }
}

var modal5 = document.getElementById("testaccess1__myModal");
var btn5 = document.getElementById("testaccess1__button");
var span5 = document.getElementsByClassName("testaccess1__modal_close")[0];

btn5.onclick = function() {
  modal5.style.display = "block";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event5) {
  if (event5.target == modal5) {
    modal5.style.display = "none";
  }
}

var modal6 = document.getElementById("testaccess2__myModal");
var btn6 = document.getElementById("testaccess2__button");
var span6 = document.getElementsByClassName("testaccess2__modal_close")[0];

btn6.onclick = function() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event6) {
  if (event6.target == modal6) {
    modal6.style.display = "none";
  }
}

var modal1 = document.getElementById("system__myModal1");
var btn1 = document.getElementById("system__content_button1");
var span1 = document.getElementsByClassName("system__modal_close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event1) {
  if (event1.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2= document.getElementById("system__myModal2");
var btn2 = document.getElementById("system__content_button2");
var span2 = document.getElementsByClassName("system__modal_close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3= document.getElementById("system__myModal3");
var btn3 = document.getElementById("system__content_button3");
var span3 = document.getElementsByClassName("system__modal_close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event3) {
  if (event3.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4= document.getElementById("system__myModal4");
var btn4 = document.getElementById("system__content_button4");
var span4 = document.getElementsByClassName("system__modal_close4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event4) {
  if (event4.target == modal4) {
    modal4.style.display = "none";
  }
}
