//The object below is a temporary reference for what a user database file would look like
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

//This function places an HTML element into index.html file. It contains a tweet and other related information posted by a user. The function also retrieves information from the user's database.
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
            ${timeAgo(tweet.created_at)}
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

//THe function below uses createTweetElement function's return info to append a posted tweet into the HTML file.
const renderTweets = function(tweetObject) {
  for (let i of tweetObject) {
    const postTweet = createTweetElement(i);
    $('.tweet-container').append(postTweet);
  }
};

//the script below prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {
  //The module below is a listener for the submit event (the submit is located in the button that belong to the form containing the tweet-form id)
  $('#tweet-form').submit(function(event) {
    //for submit listeners we need to preventDefault from happening(so that the page doesn't refresh when button is pressed)
    event.preventDefault();
    
    //the variable contains the content typed into the form using .serialize() to find the text otherwise I'd have to acces the info using: const textInput = $($(this).children()[2]).val()
    const textInput = $(this).serialize();
    //console.log(textInput)
  });
  renderTweets(tweetData);
});