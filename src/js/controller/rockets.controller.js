import { getRockets } from "../model/rockets.model.js";

// async function getInfoRockets() {
//     const rockets = await getInfoRockets()
//     const totalRockets = rockets.length
//     rockets.map(rocket => {
//         return
//     })
// }

async function getImgSRockets() {
    let rockets = await getInfoRockets();
    return rockets.map(({ id, name, flickr_images }) => {
        return {
            id,
            name,
            flickr_images,
        };
    }); 
}
