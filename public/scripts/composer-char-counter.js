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
    //also when the textVal becomes less than 0 the errorMessage function is triggered (check client-helpers.js file), if the value is higher than 0 the message is cleared from the browser by the use of ('.error-message-container').empty()
    //The else statement also clears the 'Tweet content is empty!' message when a character is typed in the form (this error message is posted in the client.js file when trying to submit an empty tweet)
    if (140 - textVal < 0) {
      $(counter).addClass('counterRedText');
      $(errorMessage('Tweet content exceeds 140 characters!'));
    } else {
      $('.error-message-container').empty();
      $(counter).removeClass('counterRedText');
    }
  });
});

