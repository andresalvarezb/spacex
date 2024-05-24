const styles = /*html */`
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html {
            font-family: Arial, Helvetica, sans-serif;
        }

        a {
            text-decoration: none;
            color: #000;
        }

        ul {
            list-style: none;
        }

        h1 {
            color: var(--color--five);
        }

        h2{
            margin-bottom: 1rem;
            color: grey;
        }

        img {
            width: 100%;
        }

        p {
            line-height: 1.5;
            text-transform: capitalize;
        }

        .modal {
            background: #fff;
            border-radius: 0.3rem;
            padding: 4rem 3rem;
            display:flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .container {
            height: 100%;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .header__title{
            color: #000;
            font-size: 2rem;    
        }

        .content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
        }

        .content__img,
        .content__description {
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
            border-radius: 0.5rem;
        }

        .content__img img{
            object-fit: cover;
            object-position: top;
            height: 100%;
        }

        .content__description{
            padding: 1rem;
        }
        .drescription h2 {
            margin-bottom: 1.5rem;
        }

        .specification {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .specification__item p {
            font-weight: 700;
        }
    </style>
`

// x;
//             flex-wrap: nowrap;
//             justify-content: space-between;
//             margin-top: 2rem;
export class DescriptionRocket extends HTMLElement {
    // data;
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = styles
    }

    connectedCallback(){
        const data = JSON.parse(this.getAttribute('description'))
        console.log(data);
        this.shadowRoot.innerHTML += /*html */`
            <div class="modal">
                <div class="container">
                    <header class="header">
                        <h2 class="header__title"> ${data.name}</h2>
                        <div class="icon_close">✖️</div>
                    </header>
                    <div class="content">
                        <div class="content__img">
                            <img src=${data.flickr_images[1]} alt="">
                        </div>
                        <div class="content__description">
                            <div class="description">
                                <h2>DESCRIPTION</h2>
                                <P>${data.description}</P>
                            </div>
                            <ul class="specification">
                                <li class="specification__item">
                                    <h2>Name</h2>
                                    <p>${data.name}</p>
                                </li>
                                <li class="specification__item">
                                    <h2>Mass</h2>
                                    <p>${data.mass.toLocaleString('en-US')} Kg</p>
                                </li>
                                <li class="specification__item">
                                    <h2>Height</h2>
                                    <p>${data.height} Mts</p>
                                </li>
                                <li class="specification__item">
                                    <h2>Costo per lauch</h2>
                                    <p>${data.cost_per_launch.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                </li>
                                <li class="specification__item">
                                    <h2>First flight</h2>
                                    <p>${data.first_flight}</p>
                                </li>
                                <li class="specification__item">
                                    <h2>Country</h2>
                                    <p>${data.country}</p>
                                </li>
                                <li class="specification__item">
                                    <h2>Status</h2>
                                    <p>${data.active}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('description-rocket', DescriptionRocket)