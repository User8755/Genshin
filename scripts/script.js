const button = document.querySelector('.banner__button');
const image = document.querySelector('.banner__image');
const title = document.querySelector('.banner__hero-name');

const randomimg = (list) => {
    let random = Math.floor(Math.random() * list.length);
    return list[random];
}

button.addEventListener('click', () => {
    const randomhero = randomimg(heroList);
    image.src = randomhero.link;
    title.textContent = randomhero.hero;
});