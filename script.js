'use strict';

const button = document.querySelector('.input_container button');
const list = document.querySelector('.todo_list');
const input = document.querySelector('.input_container input');

button.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.className = 'item';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delBut'
    deleteButton.innerText = 'Delete';
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(deleteButton);
    input.value = '';

    deleteButton.addEventListener('click', (e) => {
        li.remove();
    })
});