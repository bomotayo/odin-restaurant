const element = (el, attr, attrName) => {
  const name = document.createElement(el);
  name.setAttribute(attr, attrName);
  return name;
};

export default element;
