document.getElementById('list-ul').addEventListener('click',function(event){
    event.target.parentNode.remove(event.target)
});


document.getElementById('input-btn').addEventListener('click',function(){
    const inputList = document.getElementById('input-list');
    const inputListValue = inputList.value;
    
    const listUl = document.getElementById('list-ul');
    const li = document.createElement('li');
    li.innerText = inputListValue;
    li.classList = 'list-group-item d-flex justify-content-between text-primary';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList = 'li-btn btn btn-danger';
    li.appendChild(deleteBtn);

    listUl.appendChild(li);

    inputList.value = '';
});