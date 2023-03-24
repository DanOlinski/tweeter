//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {
  
  //when tweet button is triggered the action attribute is set to post, sending info to the DOM at rout /tweets, at this event the url will refresh to the rout /tweets. Below there is an event.preventDefault() method(this prevents the page to refresh into /tweets, however the submit action still sends a post request to the DOM at rout /tweets).
  //rout /tweets is located in server/index
  //The function below gets the info from the DOM posted at the rout /tweets, then it calls the renderTweets()(located in client-helpers.js) passing in the object from the DOM. This function however is only declared here, it is called/triggered inside the submit listener below.
  //loadTweets has to be inside document.ready
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(response) {
        renderTweets(response);
      });
  };

  //The module below is a listener for the submit event (the submit is located in the button that belongs to the form containing the tweet-form id)
  $('#tweet-form').submit(function(event) {
    //for submit listeners we need to preventDefault from happening(so that the page doesn't refresh when button is pressed)
    event.preventDefault();

    //the variable contains the content typed into the form using .serialize() to find the text, otherwise I'd have to access the text typed by the user with the following jQuery syntax: const textInput = $($(this).children()[2]).val()
    const textInput = $(this).serialize();
    const textInputLength = ($($(this).children()[2]).val()).length;
    
    //The if statements prevents a user from posting a tweet longer than 140 characters or shorter than 0.
    if (textInputLength > 140) {
      //if button is clicked while the text form is empty, this will prevent null information to be posted. An alert appears to the user but the alert is handled in composer-char-counter.js file
    } else if (!textInputLength) {
      //if the tweet button is clicked and the form is empty, the errorMessage function is triggered (check client-helpers.js file)
      errorMessage('Tweet content is empty!');
    } else {
      //the post places the info from the textInput(grabbed from the submit event). In the /tweets rout the info is placed inside a file(server/data-files/initial-tweets.json)(posting to the file is handled by other functions, follow the trail of rout /tweets located in server/index for more info). The file is used when rendering all tweets to the browser
      //then loadTweets() function is called which uses a get method to retrieve the posted object from the DOM at /tweets rout then renders all the tweets in tweets.json file to the browser
      $.ajax({ method:'post', url:'/tweets', data:textInput })
        .then(function() {
          loadTweets();

          //The text field for user input should empty after the user submits his tweet. This would normally happen automatically when the page is refreshed, but since the page refresh is being blocked by event.preventDefault(); above we need to add the code below to erase what the user typed
          $('textarea').val('');
        });
    }
  });

  //loadTweets calls the renderTweets(located in client-helpers.js) function which posts all tweets stored in server/data-files/initial-tweets.json onto the home page
  loadTweets();
});


