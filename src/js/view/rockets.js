import { RocketInfo } from '../components/RocketInfo.js'
import { getInfRockets } from '../controller/rockets.controller.js'

export async function showRockets() {
    const data = await getInfRockets()
        
    const rocketInfo = new RocketInfo()
    rocketInfo.setData(data)

    const main = document.getElementById("main")
    main.append(rocketInfo)
  
    



    // const containerRockets = document.createElement('div')
    // const divContainer = document.createElement('div')

    // containerRockets.classList.add('rockets')

    // const data = await getImgSRockets()

    // let plantilla = ''
    // data.forEach(({ name, flickr_images, active }) => {
    //     plantilla += `<rocket-card title="${name}" image="${flickr_images[1]}" status="${active}"></rocket-card>`
    // })

    // containerRockets.append(divContainer)
    // divContainer.innerHTML = plantilla
    // document.getElementById('main').append(containerRockets)
}
// customElements.define("rocket-card", RocketCard);