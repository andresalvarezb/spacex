const URL = "https://api.spacexdata.com/v4/history"

export async function getHistories() {
    const res = await fetch(URL)
    return await res.json()
}