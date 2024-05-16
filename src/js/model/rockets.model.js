const URL = "https://api.spacexdata.com/v4/rockets"

export async function getRockets() {
    const res = await fetch(URL)
    return await res.json()
}