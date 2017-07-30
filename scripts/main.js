console.log("testas bliat");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("manonavig");
    if (x.className === "navigacija") {
        x.className += " responsive";
    } else {
        x.className = "navigacija";
    }
} 