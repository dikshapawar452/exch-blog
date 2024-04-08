$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: false,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
  
  }
});
function myFun() {
  var custDiv = document.getElementById("customPara");
  if (custDiv.style.display == "none" || custDiv.style.display === "") {
      custDiv.style.display = "block";
  } else {
      custDiv.style.display = "none";
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
