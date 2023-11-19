//append child & create elements

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-elem';
div.setAttribute('title', 'my');
// div.innerText = 'hello world'
const text = document.createTextNode('hello world');
div.appendChild(text);

// document.querySelector('#container').appendChild(div);


console.log(div);