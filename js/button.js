let Button = (function() {

  'use strict';

  let DOM = {};

  function cacheDom() {
    DOM.$button = document.querySelector('.button');
  }

  function init() {
    cacheDom();
    DOM.$button.addEventListener('click', () => { Bg.init(); Quote.init(); })
  }

  return {
    init: init
  };

}());
