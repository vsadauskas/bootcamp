/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("manonavig");
    if (x.className === "navigacija") {
        x.className += " responsive";
    } else {
        x.className = "navigacija";
    }
    var y = document.getElementById("pic");
    if (y.className === "navpic"){
        y.className += " responsive";
    }
    else {
        y.className = "navpic";
    }
} 
//tabu javaskriptas

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="ttekstas" and hide them
    tabcontent = document.getElementsByClassName("ttekstas");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
} 

////top scrolerio javaskriptas
//
//// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        document.getElementById("myBtn").style.display = "block";
//    } else {
//        document.getElementById("myBtn").style.display = "none";
//    }
//}
//
//// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//    document.documentElement.scrollTop = 0; // For IE and Firefox
//}




