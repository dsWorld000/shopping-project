let output;

//get child elements

const parent = document.querySelector('.parent');

// output = parent.children;
// output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent element from a child..
const child = document.querySelector('.child');
// const convertAry = Array.from(child);
console.log(child);

// convertAry.forEach(function(item){
//   item.style.color = "red"
// });
output = child.parentElement;
console.log(output)
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Elements...
  const secondItem = document.querySelector('.child:nth-child(2)');
  output = secondItem;
  output = secondItem.nextElementSibling;
  secondItem.nextElementSibling.style.color = 'blue';
  secondItem.previousElementSibling.style.color = 'brown';


console.log(output);