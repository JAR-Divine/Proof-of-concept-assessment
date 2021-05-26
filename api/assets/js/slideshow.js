//Codes for the slideshow in Portfolio page
//landscapes-container next and previous buttons onclick function
document.getElementById("previous").onclick = function(){
    plusSlides(-1, 0);
}
document.getElementById("next").onclick = function(){
    plusSlides(1, 0);
}
//portraits-container next and previous buttons onclick function
document.getElementById("previous2").onclick = function(){
    plusSlides(-1, 1);
}
document.getElementById("next2").onclick = function(){
    plusSlides(1, 1);
}
//slide show variables and functions
var slideIndex = [1,1];
var slideId = ["slides1", "slides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";
  x[slideIndex[no]-1].animate([
    {transform: 'scale3d(1, 1, 1)', offset: 0}, 
    {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}, 
    {transform: 'scale3d(1, 1, 1)', offset: 1}
  ], {
      duration: 1000,
      easing: 'ease-in-out'
  });
}