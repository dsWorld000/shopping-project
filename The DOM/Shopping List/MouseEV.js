const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== 'white'){
        document.body.style.backgroundColor = 'green';
        document.body.style.Color = 'white';
    }else{
    document.body.style.backgroundColor = 'blue';
    document.body.style.Color = 'red'
    }
};
const onRightClick = () => console.log('rightclick event');





// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
