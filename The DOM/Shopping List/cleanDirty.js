// Quick & Dirty

function createListItem(item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button>
      <i class="ri-close-line"></i>
    </button>`;

   document.querySelector('.fruits-chart').appendChild(li);
}

// Clean & Performant

function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    // const button = document.createElement('button');

    // const icon = document.createElement('i');
    // icon.className = "ri-close-line";

    const button = createButton('button');


    // button.appendChild(icon);
    li.appendChild(button);


    document.querySelector('.fruits-chart').appendChild(li)
}
//Refactor to multiple function
function createButton (){
  const button = document.createElement('button');
  const icon = createIcon("ri-close-line")
  button.appendChild(icon);
  return button;
}
function createIcon (classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


createListItem('Gavava');
createNewItem('Cheese');
createNewItem('Milk')
