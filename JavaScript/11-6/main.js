document.querySelector('#createbtn').addEventListener('click',function(){
    let item = document.createElement('li');
    item.textContent='item';
    let ul = document.querySelector('ul');
    ul.appendChild(item);
})