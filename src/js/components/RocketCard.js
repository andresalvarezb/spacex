class RocketCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = /*html */ `
            <div></div>
        `
    }
}

customElements.define('rocket-card', RocketCard);