//*XSS is when you inject a script directly into a text input. If the text in a form is saved then parsed to the browser, when the page is loaded the script will execute every time you refresh, potentially braking the website.
//example of a text that can break your site: <script>$("body").empty()</script> or: <script>a program that accesses user passwords</script>
//The escape function converts html tags to unrecognizable code but when it's posted it is translated back to what it was to be safely viewed
//the escape function is used inside the createTweetElement() function
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//This function places an HTML element into index.html file. It contains a tweet and other related information posted by a user. The function also retrieves information from the user's database.
//inside the footer there is a npm module being called (timeago.format(dateTweetWasPostedInNumericFormat)). The module is being referenced in the index.html so that is doesn't have to be installed, that way it can be run by the browser and not by the server
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
        <article class="article">${escape(tweet.content.text)}</article>
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

//The function below uses the info returned from createTweetElement() function(html elements) to prepend tweet(s) into the HTML file (prepend is the same as append but places values from last to firs, to show the last tweet at the top of the list).
const renderTweets = function(tweetObjectArr) {
  //Every time this function runs it has to clear what is in the browser, otherwise it will add repeated tweets to the browser. tweetObjectArr is coming from a file(server/data-files/initial-tweets.json), New tweets are added to this file through the POST method below(fyi: when the server restarts the user data is lost, since we aren't using fs module to actually save new data into the file)
  $('.tweet-container').empty();
  
  //loop though array of objects containing all tweets info
  for (let i of tweetObjectArr) {
    const postTweet = createTweetElement(i);
    $('.tweet-container').prepend(postTweet);
  }
};

//This function creates a html element with an error message, the message is passed into the function as a string
const errorMessage = function(message) {
  let alert = $(`  
    <div class="error-message">
      <i class="fa-solid fa-triangle-exclamation"></i>
      &#160&#160&#160
      <div id="error-message">${message}</div>
      &#160&#160&#160
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>`
  );
  //every time this function runs it needs to first remove the previously posted message otherwise error messages will pile up in the browser
  $('.error-message-container').empty();

  //this places the html code inside error-message-container class located in index.html file
  $('.error-message-container').append(alert);
};