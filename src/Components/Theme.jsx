export const ChangeTheme = () => {
    let theme = JSON.parse(localStorage.getItem('theme'));
    localStorage.setItem('theme', theme ? JSON.stringify(!theme) : true)
    SetTheme()
}

export const Theme = () => {
    let body = document.querySelector('body');
    let nav = document.querySelectorAll('.nav-wrapper');
    let sideNav = document.querySelectorAll('.sidenav');
    let card = document.querySelectorAll('.card');

    let weather_name = document.querySelector('.weather_name');
    let favorite = document.querySelector('.favorite');

    let close = document.querySelectorAll('.close');
    let days = document.querySelectorAll('.days');
    let city = document.querySelectorAll('.city');
    let degree = document.querySelectorAll('.degree');
    let wi = document.querySelectorAll('.wi');

    body.classList.add('dark-bg');
    if (days.length !== 0) {
        days.forEach(asd => asd.style.color = 'white')
    }
    if (weather_name) {
        weather_name.style.color = 'white';
    }
    if (close.length !== 0) {
        close.forEach(item => item.style.color = 'white');
    }
    if (city.length !== 0) {

        city.forEach(asd => asd.style.color = 'white')
    }
    if (favorite) {
        favorite.style.color = 'white';
    }
    if (degree.length !== 0) {
        degree.forEach(asd => asd.style.color = 'white')
    }
    if (wi.length !== 0) {
        wi.forEach(asd => asd.style.color = 'white')
    }

    nav.forEach(item => item.classList.add('dark'))
    sideNav.forEach(item => item.classList.add('dark'))

    card.forEach(car => car.classList.add('dark'))
    for (let i = 0; i < sideNav.childElementCount; i++) {
        sideNav.children[i].firstElementChild.style.color = 'black';
    }
}
export const RemoveTheme = () => {
    let body = document.querySelector('body');
    let nav = document.querySelectorAll('.nav-wrapper');
    let sideNav = document.querySelectorAll('.sidenav');
    let card = document.querySelectorAll('.card');

    let weather_name = document.querySelector('.weather_name');
    let favorite = document.querySelector('.favorite');

    let days = document.querySelectorAll('.days');
    let close = document.querySelectorAll('.close');
    let city = document.querySelectorAll('.city');
    let degree = document.querySelectorAll('.degree');
    let wi = document.querySelectorAll('.wi');

    body.classList.remove('dark-bg');
    nav.forEach(item => item.classList.remove('dark'))
    sideNav.forEach(item => item.classList.remove('dark'))
    card.forEach(car => car.classList.remove('dark'))
    for (let i = 0; i < sideNav.childElementCount; i++) {
        sideNav.children[i].firstElementChild.style.color = 'white'
    }

    if (days.length !== 0) {
        days.forEach(asd => asd.style.color = 'black')
    }
    if (weather_name) {
        weather_name.style.color = 'black';
    }
    if (close.length !== 0) {
        close.forEach(item => item.style.color = 'black');
    }
    if (city.length !== 0) {
        city.forEach(asd => asd.style.color = 'black')
    }
    if (favorite) {
        favorite.style.color = 'black';
    }
    if (degree.length !== 0) {
        degree.forEach(asd => asd.style.color = 'black')
    }
    if (wi.length !== 0) {
        wi.forEach(asd => asd.style.color = 'black')
    }
}
export const SetTheme = () => {
    let theme = JSON.parse(localStorage.getItem('theme'))
    if (theme) {
        Theme()
    } else {
        RemoveTheme()
    }
}