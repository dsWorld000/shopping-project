const input = document.querySelector('.form-input');


const onKeypress = (e) =>{
    console.log('keypress')
};
const onKeyup = (e) =>{
    console.log('keyup')
};



const onKeyDown = (e) =>{
    //key
    if(e.key === 'Enter'){
        alert('you pressed Enter')
    };

    //keyCode
    //https://www.topal.com/developers/keycode/table-of-all-keycodes
     if(e.keyCode === 15){
        alert('you pressed')
     }

    //code
   if(e.code === 'Digit1'){
    console.log('you preess 1');
   };


   if(e.repeat){
    console.log('you are holding down' + e.key);
   }
   console.log('Shift: ' + e.shiftKey);
   console.log('Alt: ' + e.altKey);
   console.log('Control: ' + e.ctrlKey);

};


// input.addEventListener('keypress', onKeypress);
// input.addEventListener('keyup', onKeyup);
input.addEventListener('keydown', onKeyDown);