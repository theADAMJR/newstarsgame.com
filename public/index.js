document.addEventListener('mousemove', function (e) {
    moveItem(e, document.querySelector('.parallax-foreground'), 20);
    moveItem(e, document.querySelector('.parallax-midground'), 40);
    moveItem(e, document.querySelector('.parallax-background'), 80);
});

function moveItem(e, parallaxItem, str = 1) {
    const xPos = (window.innerWidth / 2 - e.clientX) / str;
    const yPos = (window.innerHeight / 2 - e.clientY) / str;
    parallaxItem.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

const getRandom = () => Math.floor(Math.random() * 3) + 1;
document.querySelector('.parallax-background').style.backgroundImage = `url("./public/Purple/Layer 3/Space Background ${getRandom()}.png")`;
document.querySelector('.parallax-midground').style.backgroundImage = `url("./public/Purple/Layer 2/Space Background ${getRandom()}.png")`;
document.querySelector('.parallax-foreground').style.backgroundImage = `url("./public/Purple/Layer 1/Space Background ${getRandom()}.png")`;
