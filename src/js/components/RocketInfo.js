import { RocketCard } from './RocketCard.js'
const styles = /*html */`
    <style>
        .rockets {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            overflow: hidden;
        }

        .rockets > div {
            display: flex;
            gap: 1.5rem;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            /* background-color: #2cf1336c; */
        }

    </style>
`
export class RocketInfo extends HTMLElement{
    data
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML = styles
    }

    setData(newData){
        this.data = newData
    }

    connectedCallback(){
        this.shadowRoot.innerHTML += /*html */`
            <div class="rockets">
                <div></div>
            </div>
        `

        const containerRockets = this.shadowRoot.querySelector('.rockets div')
        this.data.forEach(rocket => {
            const rocketCard = document.createElement("rocket-card")
            rocketCard.setAttribute("info", JSON.stringify(rocket))
            containerRockets.insertAdjacentElement("beforeend",rocketCard)
        })

    }
}

customElements.define("rocket-card", RocketCard);
customElements.define("rocket-info", RocketInfo)