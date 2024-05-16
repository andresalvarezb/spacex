import { getRockets } from "../model/rockets.model.js";

export async function getImgSRockets() {
    let rockets = await getRockets();
    return rockets.map(({ id, name, flickr_images, active }) => {
        return {
            id,
            name,
            flickr_images,
            active
        };
    }); 
}
