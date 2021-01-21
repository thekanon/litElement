import { LitElement, html, css } from '../../node_modules/lit-element/lit-element.js';
import '../../dev/components/litGrid.js';

import { Menu } from './menu.js'
const menu = new Menu()
const menuJSON = menu.menuJSON;

export class MyElement extends LitElement {
    static get styles() {
        return css `
      :host {
        display: inline-block;
        padding: 16px;
        width: 900px;
        margin-top:100px;
      }

      :host h1{
        font-family: Staatliches;
        font-size: 3.5em;
        margin-bottom: 32px;
        color: #2d2d2d;
        -webkit-user-select: none; 
      }
    `;
    }

    static get properties() {
        return {
            /**
             * The name to say "Hello" to.
             */
            name: { type: String },

            /**
             * The number of times the button has been clicked.
             */
            count: { type: Number },
        };
    }

    constructor() {
        super();
        this.name = 'NCRM';
        this.count = 0;
        this.menu = menuJSON;
        this.sampleDataString = '';
    }
    render() {
        return html `
      <h1>${this.name} Menu</h1>
      <lit-grid
        .bindRef="${this.menu}"
        flag='no-footer'
        type='link'
      />
    `;
    }

    _onClick() {
        this.count++;
        this.name = 'World';
    }
}

window.customElements.define('menu-element', MyElement);