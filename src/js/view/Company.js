import { getData } from "../model/Company.model.js";

export async function getInfoCompany() {
    const {
        headquarters,
        links,
        founder,
        valuation,
        summary
    } = await getData()

    const companyContainer = document.createElement("div")
    const companyContent = document.createElement("div")
    const companyText = document.createElement("div")
    const companyFounder = document.createElement("p")
    const companyValuation = document.createElement("p")
    const companyAddress = document.createElement("address")
    const companyContainerSummary = document.createElement("div")
    const companySummary = document.createElement("p")
    const companyContainerMedia = document.createElement("div")

    console.log(valuation.toLocalString('en-US', { style: 'currency', currency: 'USD' }));
    companyFounder.textContent = `Founder: ${founder}`
    companyValuation.textContent = `Valuation: ${valuation.toLocalString('en-US', { style: 'currency', currency: 'USD' })}`
    companyAddress.textContent = `Address: ${headquarters.address}, ${headquarters.city}`
    companySummary.textContent = summary
    Object.keys(links).forEach(media => {
        const linkContainer = document.createElement("a")
        linkContainer.setAttribute("href", links[media])
        linkContainer.innerHTML = `<i class='bx bxl-twitter'></i>`
        companyContainerMedia.append(linkContainer)
    })

    companyContainer.classList.add("company")
    companyContent.classList.add("company__content")
    companyText.classList.add("company__text")

    companyContainerSummary.append(companySummary, companyContainerMedia)
    companyText.append(companyFounder, companyValuation, companyAddress)
    companyContent.append(companyText, companyContainerSummary)
    companyContainer.append(companyContent)

    const main = document.getElementById("main")
    main.append(companyContainer)

    // <div class="company">
    //     <div class="company__content">
    //         <div class="company__text">
    //             <p>Founder</p>
    //             <p>Valuation:  </p>
    //             <address>Address: </address>
    //         </div>
    //         <div>
    //             <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The
    //                 company was founded in 2002 to revolutionize space technology, with the ultimate goal of
    //                 enabling people to live on other planets.</p>
    //             <div>
    //                 <a href=""><i class='bx bxl-twitter'></i></a>
    //                 <a href=""><i class='bx bxl-twitter'></i></a>
    //                 <a href=""><i class='bx bxl-twitter'></i></a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}
