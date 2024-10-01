let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let hoje = document.getElementById('day');

function updateClock(){
    let now = new Date();
    let hour = String(now.getHours()).padStart(2,'0');
    let minute = String(now.getMinutes()).padStart(2,'0');
    let second = String(now.getSeconds()).padStart(2,'0');
    let day = String(now.getDate()).padStart(2, '0');
    let mes = String(now.getMonth() + 1).padStart(2,'0');
    let ano = now.getFullYear();


    digitalElement.innerHTML = `${hour}:${minute}:${second}`;
    
    hoje.innerHTML = `${day}/${mes}/${ano}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    
}

updateClock();
setInterval(updateClock, 1000);
