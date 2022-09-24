let img = document.getElementById('image');
console.log(img);

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
        if (item.id == 'jet-black') {
            img.src = 'images/watch4.png';
        }
        if (item.id == 'jet-blue') {
            img.src = 'images/watch3.png';
        }
        if (item.id == 'smoke-green') {
            img.src = 'images/watch2.png';
        }
        if (item.id == 'smoke-grey') {
            img.src = 'images/watch1.png';
        }
        if (item.id == 'rose-pink') {
            img.src = 'images/watch.jpg';
        }
    })
})