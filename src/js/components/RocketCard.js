import { getImgSRockets } from "../controller/rockets.controller.js";

const style = /*html*/ `
    <style>
        * {
            padding: 0;
            margin:0;
            box-sizing: border-box;
        }
        .rocket__img-container{
            object-fit: cover;
        }

        .rocket__img {
            width: 100%;
            height: 100%
        }
    </style>

`;

export class RocketCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = style;
        this.name = "";
        this.img = "";
        this.status = "";
    }

    connectedCallback() {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="rocket">
                <h2 class="rocket__name">${this.name}</h2>
                <figure class="rocket__img-container">
                    <img class="rocket__img" src="${this.img}" alt=""/>
                    <figcaption class="rocket__status">${this.status}</figcaption>
                </figure>
            </div>
        `;
    }

    static get observedAttributes() {
        return ["title", "image", "status"];
    }

    attributeChangedCallback(name, old, now) {
        if (name == "title") this.name = now;
        if (name == "image") this.img = now;
        if (name == "status") this.status = now;
    }
    // connectedCallback() {
    //     this.getData()
    // }

    // async getData() {
    //     const rockets = await getImgSRockets();
    //     rockets.forEach(({ id, name, flickr_images, status }) => {
    //         this.shadowRoot.innerHTML += /*html*/ `
    //             <div class="rocket">
    //                 <h2 class="rocket__name">${name}</h2>
    //                 <figure class="rocket__img-container">
    //                     <img class="rocket__img" src="${flickr_images[0]}" alt=""/>
    //                     <figcaption class="rocket__status">${status}</figcaption>
    //                 </figure>
    //             </div>
    //         `;
    //     });
    // }
}
