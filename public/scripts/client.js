//This function places an HTML element into index.html file. It contains a tweet and other related information posted by a user. The function also retrieves information from the user's database.
//inside the footer there is a npm module being called (timeago.format(dateTweetWasPostedInNumericFormat)). The module is being referenced in the index.html so that is doesn't have to be installed
const createTweetElement = function(tweet) {
  let postedTweet = $(
    `<section class="posted-tweet">
        <header class="tweet-header">
          <div class="name">
            <i class="fa-regular fa-user"></i><!-- user icon -->
            &#160
            ${tweet.user.name}
          </div>
          <div class="username">
            ${tweet.user.handle}
          </div>
        </header>
        <article class="article">${tweet.content.text}</article>
        <p class="border"></p>
        <footer class="tweet-footer">
          <div id="time-ago">
            ${timeago.format(tweet.created_at)}
          </div>
          <div>
            <i id="flag" class="fa-solid fa-flag"></i>&#160<!-- flag icon -->
            <i id="retweet" class="fa-solid fa-retweet">&#160</i><!-- refresh icon -->
            <i id="heart" class="fa-solid fa-heart">&#160</i><!-- heart icon -->
          </div>
        </footer>
      </section>`
  );
  return postedTweet;
};

//The function below uses createTweetElement function's return info(html elements) to prepend a posted tweet into the HTML file (prepend is the same as append but places values from last to firs, to show the last tweet at the top of the list).
const renderTweets = function(tweetObjectArr) {
  //Every time this function runs it has to clear what is in the browser, otherwise it will add repeated tweets to the browser. tweetObjectArr is coming from a file(server/data-files/initial-tweets.json), New tweets are added to this file through the POST method below(fyi: when the server restarts the user data is lost, since we aren't using fs module)
  $('.tweet-container').empty();

  //loop though array of objects containing all tweets info
  for (let i of tweetObjectArr) {
    const postTweet = createTweetElement(i);
    $('.tweet-container').prepend(postTweet);
  }
};

//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {
  
  //when tweet button is triggered the action attribute is set to send a post to page /tweets, at this event the url will refresh to the rout /tweet. Below there is an event.preventDefault() method(this prevents the page to refresh into /tweets, however the action still sends a post request to rout /tweets).
  //rout /tweets is located in server/index
  //The function below gets the info from the DOM posted at the rout /tweets, then it calls the renderTweets() passing in the object from the DOM
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

    //the variable contains the content typed into the form using .serialize() to find the text otherwise I'd have to access the info using: const textInput = $($(this).children()[2]).val()
    const textInput = $(this).serialize();

    //the post places the info from the /tweets rout DOM then runs the loadTweets() function which uses a get method to retrieve the posted object from the DOM
    $.ajax({ method:'post', url:'/tweets', data:textInput })
      .then(function() {
        loadTweets();
      });
  });

  //loadTweets function posts all tweets stored in server/data-files/initial-tweets.json onto the home page
  loadTweets();
});


