// 初期値の設定
let count = 0;

// HTML要素の取得
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
// console.log(btns)

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count --;
        } else if (styles.contains('increase')) {
            count ++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        value.textContent = count;
    })
})
