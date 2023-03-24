//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {

  //The jQuery modules below add a CSS class that casts a shadow when mouse hovers over the posted tweet box
  $('.tweet-container').on("mouseover", '.posted-tweet', function() {
    $(this).addClass('shade-on-mouseover');
  });
  $('.tweet-container').on("mouseout", '.posted-tweet', function() {
    $(this).removeClass('shade-on-mouseover');
  });

  //The jQuery modules below add a CSS class that casts a shadow when mouse hovers over the posted tweet box
  $('.container').on("mouseover", '#tweet-btn', function() {
    $(this).addClass('glow-on-mouseover');
  });
  $('.container').on("mouseout", '#tweet-btn', function() {
    $(this).removeClass('glow-on-mouseover');
  });

  //The jQuery modules below add a CSS class that changes the color of the footer icons(within posted tweet box) when mouse hovers over the icons. The syntax below is used because the listener needs to access a child element from another file (#flag is the child of .container), so: $('.parent-class').on("eventToListenFor", 'chielToApplyChangeOn', function(){})
  $('.tweet-container').on("mouseover", '#flag', function() {
    $(this).addClass('orange-on-mouseover');
  });
  $('.tweet-container').on("mouseout", "#flag", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $('.tweet-container').on("mouseover", "#retweet", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $('.tweet-container').on("mouseout", "#retweet", function() {
    $(this).removeClass('orange-on-mouseover');
  });
  $('.tweet-container').on("mouseover", "#heart", function() {
    $(this).addClass('orange-on-mouseover');
  });
  $('.tweet-container').on("mouseout", "#heart", function() {
    $(this).removeClass('orange-on-mouseover');
  });
});



