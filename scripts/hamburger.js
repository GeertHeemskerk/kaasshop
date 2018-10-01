document.getElementsByClassName('openMenu')[0].onclick = function(){
  document.getElementsByClassName("openMenu")[0].style.visibility = "hidden";
  document.getElementsByTagName("main")[0].style.visibility = "hidden";

  document.getElementsByClassName("closeMenu")[0].style.visibility = "visible";
  document.getElementById("menu").style.visibility = "visible";
}

document.getElementsByClassName('closeMenu')[0].onclick = function(){
  document.getElementsByClassName("openMenu")[0].style.visibility = "visible";
  document.getElementsByTagName("main")[0].style.visibility = "visible";

  document.getElementsByClassName("closeMenu")[0].style.visibility = "hidden";
  document.getElementById("menu").style.visibility = "hidden";
}
