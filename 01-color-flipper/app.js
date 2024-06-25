const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    /* 文字コードと背景色の変更の処理が必要*/
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return (Math.floor(Math.random() * colors.length));
}