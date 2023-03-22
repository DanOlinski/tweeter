//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {

  //The jQuery modules below add a CSS class that casts a shadow when mouse hovers over the posted tweet box
  $('.posted-tweet').on("mouseover", function() {
    $(this).addClass('shade-on-mouseover');
  });
  $('.posted-tweet').on("mouseout", function() {
    $(this).removeClass('shade-on-mouseover');
  });

  //The jQuery modules below add a CSS class that changes the color of the footer icons(within posted tweet box) when mouse hovers over the icons
  $('#flag').on("mouseover", function() {
    $(this).addClass('orange-on-mouseover');
    console.log(this);
  });
  $("#flag").on("mouseout", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $("#retweet").on("mouseover", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $("#retweet").on("mouseout", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $("#heart").on("mouseover", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $("#heart").on("mouseout", function() {
    $(this).removeClass('orange-on-mouseover');
  });
});



