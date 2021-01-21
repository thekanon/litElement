import {LitElement,html,css} from '../../../node_modules/lit-element/lit-element.js'

class MyElement extends LitElement {
    static get properties() {
        return {
        };
    }
    constructor() {
        super();
    }

    static get styles() {
        return css ``;
    }

    render() {
        return html `<div>testasdasd</div>`;
    }
}

customElements.define('test-element', MyElement);