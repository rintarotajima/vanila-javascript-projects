/* 16進数の16個の各値を配列 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
/* 16進数コードを表示するための要素を定数に代入 */
const color = document.querySelector('.color');
/* button要素を定数に代入 */
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor = hexColor;
})

/* ランダムで0~15の整数値を生成する関数 */
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}