function removeClearButton(){
    const clearBtn = document.querySelector('#bttn');
    clearBtn.remove();
}

//removeChild
function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    
    ul.removeChild(li);
}

// remove taken parameter
function removeItm(itemNum){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNum})`);

    ul.removeChild(li);
}

function removeItem2(itemNum){
     const ul = document.querySelector('ul');
     const li = document.querySelectorAll('li')[itemNum - 1];

     ul.removeChild(li);
}

function removeItem3(itemNum){
    const li = document.querySelectorAll('li');
    li[itemNum].remove();
}

const removeItem4 = (itemNum) => document.querySelectorAll('li')[itemNum -1].remove();



removeClearButton();
// removeFirstItem();
// removeItm(3);
// removeItem2(1);
// removeItem3(1);
removeItem4(1);