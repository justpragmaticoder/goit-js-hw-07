function countChildElements(element=null, selector=null) {
  const domElem = (element ?? document.querySelector(selector));

  return domElem ? domElem.childElementCount : 0;
}

(() => {
  const targetElement = document.querySelector('ul#categories');

  console.log('Number of categories: ', countChildElements(targetElement));

  for (const childElement of targetElement.children) {
    const header = childElement.querySelector('h2');
    const list = childElement.querySelector('ul');

    console.log('Category: ', header.innerText);
    console.log('Elements: ', countChildElements(list));
  }
})();