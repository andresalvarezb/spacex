const URL = "https://api.spacexdata.com/v4/company"

export async function getData() {
    const res = await fetch(URL)
    return await res.json()
}