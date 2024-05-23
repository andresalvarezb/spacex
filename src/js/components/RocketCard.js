import { getImgSRockets } from "../controller/rockets.controller.js";
import './DescriptionRocket.js'
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
    cardRockets
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = style;
    this.name = "";
    this.img = "";
    this.status = "";
  }

  renderCard(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    const descriptionRocket = document.createElement('description-rocket')
    modal.append(descriptionRocket)
    document.querySelector('.wrapper__main').append(modal)
  }

  connectedCallback() {
    this.shadowRoot.innerHTML += /*html*/ `
            <div class="rocket">
                <h2 class="rocket__name">${this.name}</h2>
                <div class="rocket__content">
                    <img class="rocket__img" src="${this.img}" alt=""/>
                    <p class="rocket__status">${this.status}</p>
                </div>
            </div>
        `;

    this.cardRockets = [...this.shadowRoot.querySelectorAll(".rocket")];
    this.cardRockets.forEach((rocket) => {
      rocket.addEventListener("click", (e) => this.renderCard());
    });
  }

  
  static get observedAttributes() {
    return ["title", "image", "status"];
  }

  attributeChangedCallback(name, old, now) {
    if (name == "title") this.name = now;
    if (name == "image") this.img = now;
    if (name == "status") this.status = now;
  }
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
