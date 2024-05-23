const styles = /*html */`
    <style>
        .container {
            background-color: black
        }
    </style>
`
export class DescriptionRocket extends HTMLElement {
    // data;
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = styles
    }

    

    connectedCallback(){
        this.shadowRoot.innerHTML += /*html*/`
            ${(this.data.map(rocket => {
                return /*html */`
                    <div class="container">
                        <header class="header">
                            <h2 class="header__title"></h2>
                            <div class="icon_close"></div>
                        </header>
                        <div class="content">
                            <div class="content__img">
                                <img src="" alt="">
                            </div>
                            <div class="content__description">
                                <div class="description">
                                    <h2>DESCRIPTION</h2>
                                    <P></P>
                                </div>
                                <ul class="specification">
                                    <li class="specification__item">
                                        <h2>Name</h2>
                                        <p></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
            })).join('')}
                
        `
    }
}

customElements.define('description-rocket', DescriptionRocket)