let box = document.querySelector('.section-1');
let menuBox = document.querySelector('.menu-box');
let value = true;

const toggle = () => {
    if (value === true) {
        box.style.marginTop = '270px';
        setTimeout(() => {
            menuBox.style.zIndex = '0';
        }, 500)
        value = false;
    } else {
        box.style.marginTop = '0px';
        menuBox.style.zIndex = '-1';
        value = true;
    }
}


let links = document.querySelectorAll('a');

const load = () => {
    if (window.location.href.endsWith('/') || window.location.href.endsWith('/index.html')) {
        links[0].style.color = '#569dd0';
        links[5].style.color = '#569dd0';
    }
    else if (window.location.href.endsWith('/about.html')) {
        links[1].style.color = '#569dd0';
        links[6].style.color = '#569dd0';
    }
    else if (window.location.href.endsWith('./vechile-models.html.html')) {
        links[2].style.color = '#569dd0';
        links[7].style.color = '#569dd0';
    }
    else if (window.location.href.endsWith('./testimonials.html.html')) {
        links[3].style.color = '#569dd0';
        links[8].style.color = '#569dd0';
    }
    else if (window.location.href.endsWith('./contact.html.html')) {
        links[4].style.color = '#569dd0';
        links[9].style.color = '#569dd0';
    }
}

var div = document.getElementById('cars-img');
var rent = document.getElementById('car-rent');
var make = document.getElementById('car-make');
var model = document.getElementById('car-model');
var year = document.getElementById('car-year');
var transmission = document.getElementById('car-transmission');
var door = document.getElementById('car-doors');


function carDetails(img, rentPrice, makes, models, years, transmissions, doors) {
    div.innerHTML = `<img src="${img}" alt="Cars">`
    rent.innerHTML = rentPrice
    make.innerHTML = makes
    model.innerHTML = models
    year.innerHTML = years
    transmission.innerHTML = transmissions
    door.innerHTML = doors
}

// end 