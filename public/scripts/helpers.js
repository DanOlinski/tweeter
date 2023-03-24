//The function checks the date (in numeric representation), and compares to the current time. It then returns to the client a string informing how much time has elapsed since the post was committed
const timeAgo = function(numericalDate) {
  const difference = new Date().getTime() - numericalDate;
  let postedTimeAgo = function(divider) {
    return Math.round(difference / (divider));
  };
  if (postedTimeAgo(1000) < 59) {
    return postedTimeAgo(1000) + ' Second(s) Ago';
  } else if (postedTimeAgo(60000) < 59) {
    return postedTimeAgo(60000) + ' Minute(s) Ago';
  } else if (postedTimeAgo(3600000) < 24) {
    return timeAgo(3600000) + ' Hour(s) Ago';
  } else if (postedTimeAgo((3600000 * 24)) < 367) {
    return timeAgo(3600000) + ' Hour(s) Ago';
  }
  postedTimeAgo((3600000 * (24*366)));
  return postedTimeAgo((3600000 * (24*366))) + ' Year(s) Ago';
};