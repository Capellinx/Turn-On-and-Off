const tunOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const turnUp = document.getElementById('turnUp');

tunOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnUp.addEventListener('click', lampUp);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


function thisLampBroken() {
    return lamp.src.indexOf('images/quebrada') > -1
}

function lampOn() {
    if (!thisLampBroken()) {
        lamp.src = 'images/ligada.png';
    }
}

function lampOff() {
    if (!thisLampBroken()) {
        lamp.src = 'images/desligada.png';
    }
}

function lampBroken() {
    lamp.src = 'images/quebrada.png';
}

function lampUp() {
    lamp.src = 'images/desligada.png';
}
