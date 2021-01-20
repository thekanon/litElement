import {LitElement, html} from '../../node_modules/lit-element/lit-element.js';

class MyElement extends LitElement {
  static get properties() {
    return {
      label:{type:String},

      button01: {type:Object},
      button02: {type:Object},
      button03: {type:Object},
      button04: {type:Object},

      parentWindow: {type:Object}
    };
  }
  constructor() {
    super();
    this.name = 'NCRM';
    this.array = [1,2,3,4,5]
    this.count = 0;
    // this.addEventListener('click', this._handleFocus);
  }
  connectedCallback() {
    super.connectedCallback()
  }
  clickEvent01(event){
    this.button01.button01Click(event,this.parentWindow)
  }
  clickEvent02(event){
    this.button02.button02Click(event,this.parentWindow)
  }
  clickEvent03(event){
    this.button03.button03Click(event,this.parentWindow)
  }
  clickEvent04(event){
    this.button04.button04Click(event,this.parentWindow)
  }
  render() {
    return html`
      <link rel="stylesheet" href="../../css/default/common-4.x.css" type="text/css">
      <div class="caption-pnl">
          ${this.label 
            ? html`
            <h2>
                <span class="x-icon"></span>
                <span class="x-label">${this.label}</span>
            </h2>
            `
            : html``
          }
          <span class="buttonset fr">
          ${this.button01 
            ? html` <button @click="${this.clickEvent01}" class="doaction" id="btnRowAdd">${this.button01.label}</button>`
            : html``
          }
          ${this.button02
            ? html` <button @click="${this.clickEvent02}" class="doaction" id="btnRowDel">${this.button02.label}</button>`
            : html``
          }
          ${this.button03 
            ? html` <button @click="${this.clickEvent03}" class="doaction" id="btnFilter">${this.button03.label}</button>`
            : html``
          }
          ${this.button04 
            ? html` <button @click="${this.clickEvent04}" class="doaction" id="btnReset">${this.button04.label}</button>`
            : html``
          }
          </span>
      </div>
        `
  }
}

customElements.define('button-set', MyElement);