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
        this.shadowRoot.innerHTML = /*html */ `
        ${style}
        <div class="company">
            <div class="company__content">
                <div class="company__text">
                    <p>Founder</p>
                    <p>Valuation:  </p>
                    <address>Address: </address>
                </div>
                <div>
                    <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The
                        company was founded in 2002 to revolutionize space technology, with the ultimate goal of
                        enabling people to live on other planets.</p>
                    <div>
                        <a href=""><i class='bx bxl-twitter'></i></a>
                        <a href=""><i class='bx bxl-twitter'></i></a>
                        <a href=""><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}

