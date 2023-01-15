const button = document.querySelector('.banner__button');
const image = document.querySelector('.banner__image');
const title = document.querySelector('.banner__hero-name');
const page = document.querySelector('.page')
const template = document.querySelector('.template').content;
const grid = document.querySelector ('.grid');

const randomimg = (list) => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}
const renderImg = (item) => {
    const cloneGrid = template.cloneNode(true);
    cloneGrid.querySelector ('.minipicture').src = item;
    return cloneGrid
};



button.addEventListener('click', () => {
    const randomhero = randomimg(heroList);
    image.src = randomhero.link;
    setTimeout(() => {title.textContent = randomhero.hero}, 50);
    grid.prepend(renderImg(randomhero.link))
});