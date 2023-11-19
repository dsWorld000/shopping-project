// insertAdjacentElement Example
function insertElement(){
    const filter = document.querySelector('.filter');

    const h2 = document.createElement('h2');
    h2.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement("beforebegin", h2);
};

// insertAdjacentText Example
function insertText(){
    const items = document.querySelector('li:first-child');
    items.insertAdjacentText("afterend", 'insertAdjacentText');
}
// insertAdjacentHTML Example
function insertHTML(){
    const clearBtn = document.querySelector('#bttn');
    clearBtn.insertAdjacentHTML("beforeend", '<h2>insertAdjacentHTML</h2>')
}

// insertBefore Example
function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3');
    ul.insertBefore(li, thirdItem);
}

// insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/


// COUSTOM INSERTAFTER() CHALLENGE....

//method insertAfter()


function insertAfter(newEL, existingEL){
    existingEL.parentElement.insertBefore(newEL, existingEL.nextSibling);
}
    
     //new element to insert
    const li = document.createElement('li');
    li.textContent = 'Insert Me After';

    //existing element to insert after
    const firstItm = document.querySelector('li:first-child');

     // our coustom function
    insertAfter(li, firstItm);

