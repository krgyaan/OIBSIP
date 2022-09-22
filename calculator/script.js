const display = document.getElementById('display');
const button = document.querySelectorAll('button');

button.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'del') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText == 'Empty!';
            setTimeout(() => {
                (display.innerText = ''), 2000
            })
        } else {
            display.innerText += item.id;
        }
    }
})