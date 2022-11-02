// JavaScript source code
let img = [
    'https://cdn.igromania.ru/mnt/articles/c/b/2/9/3/4/31692/preview/50938572b54f0e96_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/1/3/4/8/c/8/31875/preview/62761b98e6be0636_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/1/8/4/6/5/6/31674/preview/ade7fda63359e728_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/d/5/4/c/1/a/31648/preview/5cb5162b6d8582b6_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/d/d/f/2/6/b/31642/preview/f2921fd08079d970_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/a/3/0/6/a/1/31802/preview/9bf2efda03ab6dce_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/a/f/c/f/9/9/31694/preview/e6d1b055ff36ad09_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/b/3/f/1/b/a/31681/preview/d76954bde5476cc9_848x477.jpg',
    'https://cdn.igromania.ru/mnt/articles/d/2/7/9/b/7/31660/html/more/01_d8d45bf25f79b077da62e_848xH.jpg',
    'https://cdn.igromania.ru/mnt/articles/7/b/1/d/3/c/31767/preview/07cdc90d30a5bff9_848x477.jpg'
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