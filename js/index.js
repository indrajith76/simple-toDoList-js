/*---------------------------
      code for dark mode 
-----------------------------*/
document.getElementById('bg-btn').addEventListener('click',function(){
    // this code for bg-dark-mode button and change bg-color
    document.getElementById('bg-btn').style.color='#4167a0';
    document.body.style.backgroundColor = '#010d1e';

    // this code for change list background for dark mode
    const listItem = document.getElementsByClassName('list-group-item');
    for (const li of listItem) {
        li.style.backgroundColor='#041a3b';
        li.classList = 'list-group-item d-flex justify-content-between text-secondary';
        li.style.color='white';
    }

    // code of dark mode for list button
    const libtn = document.getElementsByClassName('li-btn');
    for (const btn of libtn) {
        btn.style.backgroundColor='#7b010d';
        btn.style.borderColor='#7b010d';
        btn.style.color='#d6d6d6';
    }

    // code of dark mode for input field
    const inputList = document.getElementById('input-list');
    inputList.style.backgroundColor = '#041a3b';
    inputList.style.borderColor = '#545454';
    inputList.style.color = '#b1b1b1';
    // code of top h1
    const topH1 = document.getElementById('top-h1');
    topH1.classList = '';
    topH1.style.color = '#0057a1';
    // code of add list input button
    const inputBtn = document.getElementById('input-btn');
    inputBtn.style.background='#08306b';
    inputBtn.style.borderColor = '#595b5c';
    inputBtn.style.color = '#c5c5c5';

    // code for clear all button
    const clearBtn = document.getElementById('clear-all');
    clearBtn.style.backgroundColor='#7b010d';
    clearBtn.style.borderColor = '#2c2a2a00';
    clearBtn.style.color = '#b1b1b1';
});

// code of input field validation
document.getElementById('input-list').addEventListener('keyup', function(event){
    if(event.target.value !== ''){
        document.getElementById('input-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('input-btn').setAttribute('disabled', true);
    }
})


/*--------------------------------
    code for remove list item 
----------------------------------*/
document.getElementById('list-ul').addEventListener('click',function(event){
    event.target.parentNode.remove(event.target);
});

/*--------------------------------
    code for add new list 
----------------------------------*/
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

// code of clear all button
function allClear(){
    document.getElementById('list-ul').innerHTML = '';
}