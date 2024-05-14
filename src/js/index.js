
import { CompanyInfo } from "./components/companyInfo.js";

const main = document.getElementById("main")

window.addEventListener('load', (e) => {
    main.innerHTML = `<company-infomation></company-infomation>`
})

customElements.define("company-infomation", CompanyInfo);