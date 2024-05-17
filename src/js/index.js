import { getInfoCompany } from "./view/Home.js"
import { showRockets } from "./view/rockets.js"

// HOME
window.addEventListener('DOMContentLoaded', async (e) => {
    await getInfoCompany()
})


// ROCKETS
const rocketBtn = document.getElementById('rockets')
rocketBtn.addEventListener('click', async (e) => {
    document.getElementById('company').remove()
    await showRockets()
})