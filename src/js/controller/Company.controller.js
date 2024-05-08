import { getData } from "../model/Company.model.js";


async function getInfoCompani() {
    const {headquarters, links, founder, valuation, summary} = await getData()
    return {
        headquarters,
        links,
        founder,
        valuation,
        summary
    }
}