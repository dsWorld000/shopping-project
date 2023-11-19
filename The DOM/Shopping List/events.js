const clearBtn = document.querySelector('#bttn');

const itemList = document.querySelector('ul')
const items = itemList.querySelectorAll('li');

// itemList.innerHTML = '';
// items.forEach( (item)=> item.remove());


 //JS Event Listeners

//  clearBtn.onclick = function(){
//     alert('Clear Items');
//  };



//  addEventListener()
  clearBtn.addEventListener('click', function(){
     itemList.innerHTML = '';
items.forEach( (item)=> item.remove());
 });

//  setTimeout(() => clearBtn.removeEventListener('click', work), 5000);

//  setTimeout(() => clearBtn.click(), 5000);