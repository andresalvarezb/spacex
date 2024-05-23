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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = style;
  }

  render(newData){
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
    const data = JSON.parse(this.getAttribute('info'));
    console.log(data);
    this.render(data)

    const rockets = this.shadowRoot.querySelectorAll(".rocket");
    
  }

  static get observedAttributes() {
    return ['info'];
  }
}