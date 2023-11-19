function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = 'Replace first';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)')
    secondItem.outerHTML = '<li>REPLACE second</li>';
    
}

function replaceAllItems(){
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index)=>{
        // item.outerHTML = '<li>Replace All</li>';
        if(index === 1){
            item.innerHTML = 'Second Itm'
        }else{
        item.innerHTML = 'Replace All';
    }
    });
    
    //  lis.forEach((item, index) => item.innerHTML = index === 2 ? 'Third Itm' : 'Items ');
}

function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping Menu';
    header.replaceChild(h2, h1);
}


replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();