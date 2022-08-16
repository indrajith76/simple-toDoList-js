const liButton = document.getElementsByClassName('li-btn');
for (const liBtn of liButton) {
    liBtn.addEventListener('click',function(event){
        liBtn.parentNode.remove(event.target);
    })
}


document.getElementById('input-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('input-list').value;
    
    const listUl = document.getElementById('list-ul')
    const li = document.createElement('li');
    li.innerText = inputValue;
    li.classList = 'list-group-item d-flex justify-content-between text-primary';
    listUl.appendChild(li);
})