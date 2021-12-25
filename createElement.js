function createElement(element, parent, attribute, text){

  let el = document.createElement(element);

  if (attribute){
    for (let i = 0; i < attribute.length; i++){
      el.setAttribute(attribute[i].property,attribute[i].value);
    }
  }

  if (text) {
    let t = document.createTextNode(text);
    el.append(t);
  }

  if (parent){
    parent.appendChild(el);
  }
  return el
}
