import { CompanyInfo } from "../components/companyInfo.js";
import { getInfoCompany } from "../controller/Company.controller.js";

export async function showHome() {
    const data = await getInfoCompany()
    
    const companyInfo = new CompanyInfo()
    companyInfo.setData(data)

    const main = document.getElementById("main")
    main.append(companyInfo)
}
