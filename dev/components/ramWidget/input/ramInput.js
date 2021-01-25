import {LitElement,html,css} from 'lit-element'

class MyElement extends LitElement {
    static get properties() {
        return {
            dataNx:{},
        };
    }
    constructor() {
        super();
    }

    static get styles() {
        return css `
        `;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html `
               <input></input>
        `;
    }
}

customElements.define('ram-input', MyElement);