// 初期値の設定
let count = 0;

// HTML要素の取得
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        /* decreaseボタンを押したときの処理*/
        if (styles.contains('decrease')) {
            /* 現在のcountから値を-1 */
            count--;
        }
        /* increaseボタンを押したときの処理 */
        else if (styles.contains('increase')) {
            /* 現在のcountから値を+1; */
            count++;
        } 
        /* resetボタンを押したときの処理 */
        else if (styles.contains('reset')) {
            /* 現在のcountを0に戻す */
            count = 0;
        }

        /* カウンターの色の更新 */
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        /* カウンターの値を更新 */
        value.textContent = count;
    })
})
