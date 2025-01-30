const input = document.querySelector('.input');
const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (input.value === '') {
        alert('Please write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem('Data', list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('Data');
}
showTask();