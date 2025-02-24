
const add = document.querySelector('#add');
const h5 = document.querySelector('h5');
let flag = true;

add.addEventListener('click', ()=>{
    if (flag) {
        h5.innerHTML = "Friends";
        h5.style.color = "Green";

        add.innerHTML = "Remove Friend";
        add.style.backgroundColor = "lightgrey";

        flag = false;
    } else {
        h5.innerHTML = "Stranger";
        h5.style.color = "rgba(203, 31, 31, 0.793)";

        add.innerHTML = "Add Friend";
        add.style.backgroundColor = "lightGreen";

        flag = true;
    }
})