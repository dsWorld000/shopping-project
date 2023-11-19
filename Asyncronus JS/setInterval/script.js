// const intervalID = setInterval(myCallback, 1000);

// function myCallback(){
//     console.log(Date.now());
// }

let intervalID;

function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, 1000)
    }
}

function changeRandomColor(){
   const randomColor =  Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = `#${randomColor}`;
}

// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }else{
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';


//     }
// }




function stopChange(){
    clearInterval(intervalID);
}




document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);