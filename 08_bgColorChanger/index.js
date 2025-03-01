
const randomColor = ()=>{
    const hex = "0123456789ABCDEF"; // hex values range
    let color = '#';  // hex value starts with #

    // creating hex value
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
};


// function to start the co;or changer.
let intervalId;
const startColorChange = function(){

    // here we checkd if intervalId doesn't have any value.
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 200); // set the duration of changing colors.
    }

    function changeBgColor(){
        // manipulated the background for random color.
        document.body.style.backgroundColor = randomColor(); 
    }
};


// function to stop the screen from changing the colors.
const stopColorChange = function(){
    // here we cleared the interval we set in startColorChange function
    clearInterval(intervalId); 
    intervalId = null;
};

document.querySelector('.start').addEventListener('click', startColorChange);
document.querySelector('.stop').addEventListener('click', stopColorChange);