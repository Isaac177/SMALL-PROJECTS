let count = 0;

const result = document.getElementById('result');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const output = e.currentTarget.classList;

        if(output.contains('decrease')){
            count--;
        }
        else if (output.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        result.textContent = count;

        if (count < 0){
            result.style.color = 'red';
        }
        else if (count > 0){
            result.style.color = 'green';
        }
        else{
            result.style.color = 'black';
        }
    })
})