//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {

  //The jQuery modules below add a CSS class that casts a shadow when mouse hovers over the posted tweet box
  $('.container').on("mouseover", '.posted-tweet', function() {
    $(this).addClass('shade-on-mouseover');
  });
  $('.container').on("mouseout", '.posted-tweet', function() {
    $(this).removeClass('shade-on-mouseover');
  });

  //The jQuery modules below add a CSS class that changes the color of the footer icons(within posted tweet box) when mouse hovers over the icons
  $('.container').on("mouseover", '#flag', function() {
    $(this).addClass('orange-on-mouseover');
    console.log(this);
  });
  $('.container').on("mouseout", "#flag", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $('.container').on("mouseover", "#retweet", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $('.container').on("mouseout", "#retweet", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $('.container').on("mouseover", "#heart", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $('.container').on("mouseout", "#heart", function() {
    $(this).removeClass('orange-on-mouseover');
  });
});



