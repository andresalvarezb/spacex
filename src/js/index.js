import { showHome } from "./view/Home.js"
import { showRockets } from "./view/rockets.js"

// CONSTS
const menuBtns = document.querySelectorAll('.nav__item')

// HOME
window.addEventListener('DOMContentLoaded', async (e) => {
    // await getInfoCompany()
    await showHome()
})


menuBtns.forEach((menuItem) => {
    menuItem.addEventListener("click", async (e) => {
        if(e.target.textContent=='Home') await showHome()
        console.log(e.target.textContent);
    })
})

// ROCKETS
const rocketBtn = document.getElementById('rockets')
// rocketBtn.addEventListener('click', async (e) => {
//     document.getElementById('company').remove()
//     await showRockets()
// })

// const cardRockets = document.querySelectorAll('.rocket')
// cardRockets.forEach((rocket) => {
//     rocket.addEventListener('click', async (e) => {
//         console.log(e);
//     })
// })