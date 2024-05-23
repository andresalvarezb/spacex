import { getRockets } from "../model/rockets.model.js";

export async function getImgSRockets() {
  let rockets = await getRockets();
  return rockets.map(({ id, name, flickr_images, active }) => {
    return {
      id,
      name,
      flickr_images,
      active,
    };
  });
}

export async function getAllRockets() {
  let rockets = await getRockets();
  return rockets.map((rocket) => {
    const {
      name,
      description,
      height: { meters },
      mass: { kg },
      cost_per_launch,
      first_flight,
      country,
    } = rocket;
    return {
      name,
      description,
      height: meters,
      mass: kg,
      cost_per_launch,
      first_flight,
      country,
    };
  });
}
