let output;
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;
parent.lastChild.textContent = 'Hello';

// Parent node

const child = document.querySelector(".children");
output = child.parentNode;
output = child.parentElement;

child.parentElement.style.backgroundColor = '#ccc';
child.parentElement.style.padding = '10px';

// siblings
 const secondItem = document.querySelector('child:nth-child(2)');

//  output = secondItem.nextSibling
//  output = secondItem.previousSibling;

console.log(secondItem);