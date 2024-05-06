import { getHistories } from "../model/Histories.model.js";
import { getDate } from "../utils";

export async function getHistory() {
    const historias = await getHistories()
    const data = historias.map(({title, event_date_utc, details, links}) => {
        return {
            title,
            "date": getDate(event_date_utc),
            details,
            links
        }
    })
    return data
}