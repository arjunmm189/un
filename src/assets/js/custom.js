function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }