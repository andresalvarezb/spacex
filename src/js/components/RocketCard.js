import "./DescriptionRocket.js";
const style = /*html*/ `
    <style>
        * {
            padding: 0;
            margin:0;
            box-sizing: border-box;
        }

        .rocket {
            height: 100%;
        }

        .rocket__name {
            color: #fff;
            font-size: 1rem;
            font-weight: normal;
        }

        .rocket__content {
            height: calc(100% - 19px);
            position: relative;
        }
        
        .rocket__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .rocket__status {
            position: absolute;
            bottom: 0;
            z-index: 2;
            color: #fff;
            background-color: #2cf1336c;
        }
    </style>

`;

export class RocketCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = style;
    }

    render(newData) {
        this.shadowRoot.innerHTML += /*html*/ `
        <div class="rocket">
            <h2 class="rocket__name">${newData.name}</h2>
            <div class="rocket__content">
                <img class="rocket__img" src="${newData.flickr_images[1]}" alt=""/>
                <p class="rocket__status">${newData.active}</p>
            </div>
        </div>
    `;
    }

    connectedCallback() {
        const data = JSON.parse(this.getAttribute("info"));
        this.render(data);


        this.addEventListener("click", () => {

            let descriptionRocket = document.querySelector("description-rocket");
            const main = document.querySelector("main");
            console.log(descriptionRocket);
            if(descriptionRocket) {
                main.removeChild(descriptionRocket)
            }
            descriptionRocket = document.createElement("description-rocket");
            descriptionRocket.setAttribute('description', JSON.stringify(data))
            main.append(descriptionRocket);
        });
    }

    static get observedAttributes() {
        return ["info"];
    }
}
// const rocketInfo = document.querySelector('rocket-info')
// rocket.addEventListener("click", () => {
//     const descriptionRocket = document.createElement('description-rocket')
//     if(descriptionRocket){
//         rocketInfo.remove(descriptionRocket)
//     }
//     descriptionRocket.setAttribute('description', JSON.stringify(data));
//     document.getElementById("main").insertAdjacentElement('beforeend', descriptionRocket)
// })
