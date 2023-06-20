// get arrows
const secArrow = document.querySelector('.arrow_sec');
const minArrow = document.querySelector('.arrow_min');
const hourArrow = document.querySelector('.arrow_hours');

const setTime = (...arrows) => {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    const staticInfo = {
        'arrow_sec': seconds,
        'arrow_min': minutes, 
        'arrow_hours': hours,
    };

    arrows.forEach(arrow => {
        const id = arrow.classList[1];
        arrow.style.transform = id === 'arrow_hours'?
        `rotate(${30 * staticInfo[id]}deg) translateY(-20%)`:
        `rotate(${6 * staticInfo[id]}deg) translateY(-20%)`
    });
};

setInterval(() => {setTime(secArrow,minArrow,hourArrow)}, 1000);