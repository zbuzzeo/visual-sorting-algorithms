'use strict';

function handlers() {
  const randomizeBars = () => {
    console.log('hit!');
  }

  return {
    randomizeBars: randomizeBars,
  }
}

(function () {
  const makeElement = (type, id, parent, repeatCount = 1, content = '') => {
    for (let repeats = 0; repeats < repeatCount; repeats++) {
      const newElement = document.createElement(type);
      newElement.id = id;
      newElement.innerHTML = content;
      parent.appendChild(newElement);
    }
  }

  const attachEventListeners = (id, callback) => {
    const currentClass = document.querySelectorAll(id);
    currentClass.forEach(function () {
      currentClass.addEventListener('click', callback);
    });
  }

  const contents = ['Randomize', 'Quick sort', 'Merge sort', 'Selection sort', 'Insertion sort'];

  makeElement('div', 'barContainer', main);
  makeElement('div', 'cell', barContainer, 85);
  makeElement('div', 'menu', main);

  contents.forEach(title => {
    makeElement('div', 'menuItem', menu, 1, title)
  });

  // attach event listeners to menu items at some point...

})();
