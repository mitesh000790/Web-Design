const randomColor = () =>{
    const gen = () => Math.floor(Math.random()*255)+1;
    const r = gen(),g = gen(),b = gen();

    return `rgb(${r}, ${g}, ${b})`;
}

const manager = new Hammer.Manager(document.querySelector('.swipe-box'));

manager.add( new Hammer.Swipe({ threshold: 20}));
manager.on('swipeleft', event =>{
    event.target.style.setProperty('--color', randomColor());

    event.target.classList.add('animation');
    setTimeout(()=> event.target.classList.remove('animation'), 800);
});
