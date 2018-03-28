let Bg = (function() {

  'use strict';

  let delay = 0;
  let DOM = {};

  function cacheDom() {
    DOM.$container = document.querySelector('.container');
  }

  function loadImage() {
    let endpoint = 'https://source.unsplash.com/category',
        keywords     = ['web','design'],
        size    = '1920x1080';
    // let collection_id = '1387057';
    let collection_id= '173256'
    endpoint = 'http://source.unsplash.com/collection';

    // let url = `${endpoint}/${size}/?${keywords.join(',')}/`;
    let url = `${endpoint}/${collection_id}/size`;


    DOM.$container.style.opacity = 0;
    fetch(url)
      .then((data) => { renderImage(data.url); });
      // .then((resp) => resp.json())
      // .then(renderImage(data))
      // .then(() => {$container.style.opacity = 0;});
  }

  function renderImage(data) {
    DOM.$container.style.backgroundImage = `url('${data}')`;
    DOM.$container.style.opacity = 1;
  }


  function init() {
    cacheDom();
    loadImage();
  }

  return {
    init: init
  };

}());
