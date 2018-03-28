let Quote = (function () {

  'use strict';

  var DOM = {};

  function cacheDom() {
    DOM.$quote = document.getElementById('quote');
  }

  // get random quote
  function getQuote() {
    let api = {
      endpoint: 'https://quotesondesign.com/wp-json/posts?',
      params: {
        'filter[orderby]'       : 'rand',
        'filter[posts_per_page]': 1,
        'cachingHack'           : (new Date()).getTime()
      }
    };
    let url = Object.keys(api.params)
      .map((i) => i + '=' + api.params[i])
      .join('&');
    url = api.endpoint + url;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {renderQuote(data);})
      .catch(handleError);
  }

  function handleError(err) {
    console.log(err);
  }

  function renderQuote(data) {
    DOM.$quote.opacity = 0;
    setInterval
    DOM.$quote.innerHTML = data[0].content;
    DOM.$quote.opacity = 1;
  }

  /* =================== public methods ================== */
  function init() {
    cacheDom();
    getQuote();
  }

  /* =============== export public methods =============== */
  return {
    init: init
  };

}());
