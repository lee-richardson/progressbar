// get article height
var x = document.documentElement.offsetHeight - window.innerHeight;
var bar = document.getElementsByClassName('progress')[0];

// on scroll device scrolled content by article height and conver to bars width
document.addEventListener('scroll', function() {
  var y = document.documentElement.scrollTop;
  bar.style.width = (y / x) * 100 + '%';
});