// MODAL WINDOW
const modalWindowOne = document.querySelector("#modalOpen")
const modalWindowTwo = document.querySelector("#modalOpenTwo")
const theModalWindow = document.querySelector(".modal")
const modalClose = document.querySelector(".modal__close")

modalWindowOne.onclick = () => {
    theModalWindow.style.display = "flex"

    theModalWindow.classList.toggle("fade-1")
}

modalWindowTwo.onclick = () => {
    theModalWindow.style.display = "flex"

    theModalWindow.classList.toggle("fade-1")
}

modalClose.onclick = () => {
    theModalWindow.style.display = "none"
    theModalWindow.classList.toggle("fade-1")
}
// DONE



const allTabs = document.querySelectorAll(".tabcontent")
const tabChanger = document.querySelectorAll(".tabheader__item")

let tabIndex = 0

showTheTabs(tabIndex)
function showTheTabs(number = 0) {
    // tabIndex++
    allTabs.forEach(item => {
        item.style.display = "none"
        item.classList.remove("fade")
    })
    allTabs[number].style.display = "block"
    allTabs[number].classList.toggle("fade")

}

tabChanger.forEach((btn, tabIndex) => {
    btn.onclick = () => {

        tabChanger.forEach(el => el.classList.remove("tabheader__item_active"))
        btn.classList.toggle("tabheader__item_active")
        showTheTabs(tabIndex)
    }
})
// DONE



// FOOD LOOP
const slides = document.querySelectorAll(".offer__slide")
const offer__slider_prev = document.querySelector(".offer__slider-prev")
const offer__slider_next = document.querySelector(".offer__slider-next")
const current = document.querySelector("#current")
const total = document.querySelector("#total")


let slideIndex = 0

console.log(slides.length);

showSlides(slideIndex)
function showSlides(n) {



    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    console.log(slideIndex);

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    current.innerHTML = slideIndex

    console.log(slideIndex);
    current.innerHTML = slideIndex + 1

    if (slideIndex + 1 < 10) {
        current.innerHTML = `0${slideIndex + 1}`
    }
    else {
        slideIndex + 1
    }

    slides.forEach(el => el.style.display = "none")
    slides[slideIndex].style.display = "Block"
    slides[slideIndex].classList.add("fade")

}

offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}

offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}


if (slides.length >= 10) {
    total.innerHTML = slides.length
} else if (slides.length < 10) {
    total.innerHTML = "0" + slides.length
}



const genderBtns = document.querySelectorAll("#gender .calculating__choose-item")
const inputs = document.querySelectorAll(".calculating__choose_medium input")
const allActBtns = document.querySelectorAll(".calculating__choose_big .calculating__choose-item")
const overalCal = document.querySelector(".calculating__result span")


let userData = {};

genderBtns.forEach(btn => {
    btn.onclick = () => {
        let gender = btn.getAttribute("data-gender")
        userData.gender = gender

        genderBtns.forEach(el => el.classList.remove("calculating__choose-item_active"))

        btn.classList.toggle("calculating__choose-item_active")
        calCalculator(gender)
    }
})

// Формула для мужчин:
// BMR = 88,36 + (13,4 × вес в кг) + (4,8 × рост в см) – (5,7 × возраст в годах).

// Формула для женщин:
// BMR = 447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)

inputs.forEach(inp => {
    inp.oninput = () => {
        userData[inp.id] = inp.value
        calCalculator()
    }
})



allActBtns.forEach(btn => {
    btn.onclick = () => {
        allActBtns.forEach(el => {
            el.classList.remove("calculating__choose-item_active")
        })

        btn.classList.toggle("calculating__choose-item_active")

        let life = btn.getAttribute("data-lifestyle")
        userData.lifestyle = life

        calCalculator()

    }
})

overalCal.innerHTML = 0

function calCalculator() {

    if (!userData.weight || !userData.height || !userData.age || !userData.lifestyle) {
        overalCal.innerHTML = 0

    } else if (userData.gender === "man") {
        let bmr = Math.round(88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age) * userData.lifestyle)
        overalCal.innerHTML = bmr
    } else if (userData.gender === "woman") {
        let bmr = Math.round(447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age) * userData.lifestyle)
        overalCal.innerHTML = bmr
    }

}

const deadLine = "2023-05-20 00:00"

function getTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.round((t / 1000) / 60 / 60 / 24),
        hours = Math.round((t / 1000) / 60 / 60 % 24),
        minutes = Math.round((t / 1000) / 60 % 60),
        seconds = Math.round((t / 1000) % 60);

    console.log(t);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function showTime(endTime, selector) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        interval = setInterval(setTime, 1000);

    if (days === 0 && hours === 0 && minutes >= 18) {
        alert("Hi")
    }

    // console.log(interval);

    // console.log(document.querySelector(selector));

    function setTime() {
        const t = getTime(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
    }
}

showTime(deadLine, ".timer")

// console.log(getTime(deadLine));