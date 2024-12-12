
const toDoDiv=document.querySelector('#todo-div');
const inputText=document.querySelector('input');
const createButton=document.querySelector('button');
const ul=document.querySelector('#todo-list');


createButton.addEventListener('click', (event) =>{
    let list=document.createElement('li');
    let text=inputText.value 
    list.innerHTML=` ${text} <span><i class="fa-solid fa-check"></i>  <i class="fa-solid fa-trash"></i><span>`;
    ul.appendChild(list);
    inputText.value='';
    list.querySelector('.fa-trash').onclick=() =>{
      ul.removeChild(list);
    }
    list.querySelector('.fa-check').onclick=() =>{
      list.style.textDecoration = 'line-through';
    }
    });
      /*
      if (list.style.textDecoration === 'line-through') {
          list.style.textDecoration = 'none';
      } else {
          list.style.textDecoration = 'line-through';
      }
  }

 if (todoText === '') {
          return; // Prevent adding empty todos
      }
*/
