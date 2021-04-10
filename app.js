const favColor1 = document.getElementById('favcolor1');
const favColor2 = document.getElementById('favcolor2');
const gradientBackground = document.getElementById('gradient-background')


function changeColor() {
    gradientBackground.style.background = "linear-gradient(to right, " + favColor1.value + ", " + favColor2.value +")";
    
    let subtitle;
    subtitle =`<p>linear-gradient(to right,  ${favColor1.value}, ${favColor2.value});</p>`;
    const output = document.querySelector('.output').innerHTML = subtitle;

    
}

favColor1.addEventListener('input', changeColor);
favColor2.addEventListener('input', changeColor);





