const container = document.querySelector("#container");
const like = document.querySelector('i');

container.addEventListener('dblclick', ()=>{
    like.style.transform = "translate(-50%, -50%), scale(1)";
    like.style.opacity = 0.8;
    like.style.color = "rgb(233, 89, 80)";

    setTimeout(()=>{
        like.style.transform = "translate(-50%, -50%), scale(1)";
    }, 1000);
    
    setTimeout(()=>{
        like.style.opacity = 0;
    }, 1500);

})