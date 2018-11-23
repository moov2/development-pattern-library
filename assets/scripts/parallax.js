/**
 * Paralax
 */

import Rellax from 'rellax';

const parallax = function ($el) {

  // Handle single link
  var rellax = new Rellax($el, {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  return {
    rellax
  }
}

const init = function () {
  const selector = '.rellax'
  let $elements = document.querySelectorAll(selector)
  let instances = []
  let instance

  for (let i = 0; i < $elements.length; ++i) {
    instance = parallax($elements[i])

    if (instance) {
      instances.push(instance)
    }
  }

  return instances
}

init();