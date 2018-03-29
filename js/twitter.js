let Twitter = (function () {

  'use strict';

  let DOM = {};

  function cacheDom() {
    DOM.$quote = document.getElementById('quote');
    DOM.$twitter = document.getElementById('twitter');
  }

  function handleError(err) {
    console.log(err);
  }

  let endpoint = 'https://twitter.com/intent/tweet?text=';

  function handleTweet() {
    DOM.$twitter.setAttribute("href",endpoint+'"'+DOM.$quote.innerHTML+'"');
  }

  function init() {
    cacheDom();
    handleTweet();
  }

  return {
    init: init
  };

}());
