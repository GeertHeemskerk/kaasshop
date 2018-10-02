window.onload = function(){
  var menu = document.getElementById('menu');
  var closeMenu = document.getElementsByClassName("closeMenu")[0];
  var openMenu = document.getElementsByClassName('openMenu')[0];

  openMenu.onclick = function(){
    menu.className = "active"
    closeMenu.style.display = "block";
    openMenu.style.visibility = "hidden";
  }

  closeMenu.onclick = function(){
    closeMenu.style.display = "none";
    menu.className = "inactive";
    openMenu.style.visibility = "visible";
  }
}
