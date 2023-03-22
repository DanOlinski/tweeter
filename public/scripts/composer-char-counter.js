//this prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {

  //jQuery event listener
  $('#tweet-text').on("input", function() {
  //$(this).val() is a useful Jquery function, when nothing is passed into .val() is will return a value if something is passed into .val('something') it will substitute whatever is in front of .val('something') using info from argument (ex: 'something')
    const textVal = $(this).val().length;
    //access .counter class using jQuery. first we access all siblings if there were more siblings we would use [indexNumber] of the location of the sibling we want to access. Next we access all of the children, since we want to narrow down to the child in the second position we use index [1]
    const counter = $(this).siblings().children()[1];
    $(counter).val(140 - textVal);

    //this counts the info passed inside a text box, the counter starts at 140, when the value becomes negative change the text to red. if the amount of characters is decreased to 0 or anything above zero remove the red text class
    if (140 - textVal < 0) {
      $(counter).addClass('counterRedText');
    } else {
      $(counter).removeClass('counterRedText');
    }
  });
});

