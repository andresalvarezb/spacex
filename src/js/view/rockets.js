import { RocketCard } from '../components/RocketCard.js'
import { getImgSRockets } from '../controller/rockets.controller.js'

export async function showRockets() {
    const containerRockets = document.createElement('div')
    containerRockets.classList.add('rockets')

    const data = await getImgSRockets()
    let plantilla = ''
    data.forEach(({ name, flickr_images, active }) => {
        // console.log(flickr_images);
        plantilla += `<rocket-card title="${name}" image="${flickr_images[1]}" status="${active}"></rocket-card>`
    })

    containerRockets.innerHTML = plantilla
    document.getElementById('main').append(containerRockets)
}
customElements.define("rocket-card", RocketCard);