// Method 1
// const insert = document.querySelector('#insert');

// window.addEventListener('keypress', (e)=>{
// const insert = document.querySelector('#insert');
//     insert.innerHTML = ` <div class="key">
//     ${e.key ===' ' ? 'Space' : e.key}
//     <small>e.key</small>
// </div>

// <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
// </div>
// <div class="key">
//     ${e.code}
//     <small>e.code</small>
// </div>`;
// });

// Method 2

function showKeyCodes(e){
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';

  const keycodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for (let key in keycodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keycodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

   insert.appendChild(div);     
    
  }
}


window.addEventListener('keydown', showKeyCodes);
