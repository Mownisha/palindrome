$(document).ready(function() {
  $("#palindrome").submit(function(event) {
    event.preventDefault();

    var str=$("#string").val();
    var spstr=str.split("");
    var str1=spstr.slice();
    str1.reverse();
    if(str1.join("") === spstr.join("")) {
      $("#result-string").text("Entered string is a palindrime!");
    }
    else {
      $("#result-string").text("Entered string is not a palindrime!");
    }
  });
});
