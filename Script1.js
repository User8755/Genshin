// JavaScript source code
let img = [
    'https://cdn.igromania.ru/mnt/articles/c/b/2/9/3/4/31692/preview/50938572b54f0e96_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/1/3/4/8/c/8/31875/preview/62761b98e6be0636_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/1/8/4/6/5/6/31674/preview/ade7fda63359e728_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/d/5/4/c/1/a/31648/preview/5cb5162b6d8582b6_848x477.jpg'
    ]

let button = document.querySelector('.button');
let image = document.querySelector('.image');

function randomimg(list) {
    let random = Math.floor(Math.random() * img.length);
    return list[random];
}

button.addEventListener('click', function () {
    let randomhero = randomimg(img);
    image.src = randomhero;
});