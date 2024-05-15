import { getInfoCompany } from "../controller/Company.controller.js";

const style = /*html */ `
    <style>
        .company {
            height: 100%;
            color: var(--color--five);
            background: url("/src/assets/imgs/cohete-home-company.jpeg") center/cover no-repeat;
            position: relative;
        } 

        .company__content {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 50%;
            background-color: #000000ea;
            font-size: 0.8rem;
            padding: 1rem;
        }

        .company__text *{
            margin-top: 1rem;
        }

        .company__content > div:last-child {
            margin-top: 2rem;
            position: relative;
            padding-bottom: 4rem;
        }

        .company__content p {
            line-height: 1.5;
        }

        .company__content p + div {
            display: flex;
            justify-content: center;
            gap: 1rem;
            position: absolute;
            bottom: 1rem;
            left: 0;
            right: 0;
        }

        .company__content p + div a {
            color: var(--color--six);
            font-size: 1.2rem;
        }
    </style>
`;

export class CompanyInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = style
    }

    connectedCallback(){
        this.getData()
    }


    // METODOS
    async getData() {
        const {headquarters, links, founder, valuation, summary} = await getInfoCompany()
        this.shadowRoot.innerHTML += /*html */`
        <div class="company">
            <div class="company__content">
                <div class="company__text">
                    <p><b>Founder:</b> ${founder}</p>
                    <p><b>Valuation:</b> ${valuation} </p>
                    <address><b>Address:</b> ${headquarters.address} ${headquarters.city}, ${headquarters.state}</address>
                </div>
                <div>
                    <p>${summary}</p>
                    <div>
                        <a href="${links.twitter}"><i class='bx bxl-twitter'></i></a>
                        <a href="${links.elon_twitter}"><i class='bx bxl-twitter'></i></a>
                        <a href="${links.website}"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }    
}

