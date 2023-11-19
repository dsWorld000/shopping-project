const logo = document.querySelector('img');

function onClick(e){
    console.log(e.target)  
}

function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} - Y ${e.clientY}`;
    console.log('drag')
}


logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);


document.querySelector('a').addEventListener('click', function(e){
     e.preventDefault();

     console.log('link was clicked');
})






/*

 - 'target' - The element that triggered the event
 - currentTarget' - The element that the event listener is atteched to(these are the same in the case
 - 'type' - The type of event that was triggerd
 - 'timeStamp' - The time that the event was triggered
 - 'clintX' - The x position of the mouse click relative to the window
 - 'clintY' - The y position of the mouse click relative to the window
 - 'offsetX' - The x position of the mouse click relative to the element
 - 'offsetY' - The y position of the mouse click relative to the element
 - 'pageX' - The x position of the mouse click relative to the page
 - 'pageY' - The y position of the mouse click relative to the page
 - 'screenX' - The x position of the mouse click relative to the screen
 - 'screenY' - The x position of the mouse click relative to the screen

 */


