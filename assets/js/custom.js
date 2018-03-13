$(document).ready(function() {
   window.setTimeout("fademsg();", 2000); //call fade in 3 seconds
 }
)

function fademsg() {
   $("#msg").fadeOut('slow');
}
