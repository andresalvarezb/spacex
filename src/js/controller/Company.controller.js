import { getData } from "../model/Company.model.js";


export async function getInfoCompany() {
    const {headquarters, links, founder, valuation, summary} = await getData()
    return {
        headquarters,
        links,
        founder,
        valuation,
        summary
    }
}