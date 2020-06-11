function createElement(tag) {
  var dom = document.createElement(tag);
  return dom;
}

function render(data) {
  const result = []
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const dom = createElement(element.type);
    dom.style
    if (dom.children && dom.children.length) {
      const childrenDom = render(dom.children);
      childrenDom.forEach(item => {
        dom.appendChild(item)
      });
    }
    result.push(dom)
  }
  return result
}
render([{}]);
