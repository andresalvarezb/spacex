import { getHistories } from "../model/Histories.model.js";
// import { getDate } from "../utils";

export async function getHistory() {
    const historias = await getHistories()
    const data = historias.map(({title, event_date_utc, details, links}) => {
        // console.log(event_date_utc.slice(0, 10));
        // console.log(title);
        return {
            title,
            // "date": getDate(event_date_utc),
            "date": event_date_utc.slice(0, 10).replace(/-/g,"/"),
            details,
            links
        }
    })
    return data
}