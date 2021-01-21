import { LitElement, html, css } from '../../node_modules/lit-element/lit-element.js';

class MyElement extends LitElement {
    static get styles() {
        // Write styles in standard CSS
        return css `
      * {
        color: black;
      }

      :host {
        font-family: 'Noto Sans KR';
      }

      :host table {
        border-collapse: collapse;
      }

      :host table a{
        color: #1776c7;
        font-style: italic;
        font-weight: 500;
        transition:0.3s;
        margin-right:10px;
        text-decoration: none;
        text-shadow: rgba(234, 228, 228, 0.62) 3px 3px 0px;
      }

      :host table a:hover{
        color: #db35e6;
        margin-left: 10px;
        margin-right:0px;
        text-shadow:none;
      }

      :host table tr td:not(:last-child){
        border-right: 1px solid #c7c7c7;
      }

      :host table tr:not(:last-child) td{
        border-bottom: 1px solid #c7c7c7;
      }

      .mytitle {
        border-top: 4px solid black;
        font-size: 1.3rem;
        padding: 10px 10px;
        border-bottom: 2px solid black;
      }

      .mybody {
        border: none;
        padding: 11px 0px 8px 15px;
        text-align: left;
        font-weight: 400;
        font-size: 1rem;
      }
    `;
    }
    get bindRef() {
        return this._bindRef
    }
    set bindRef(val) {
        // console.log("set")
        this._bindRef = val;
        this.requestUpdate();
        this.makeGrid()
    }
    attributeChangedCallback(name, old, value) {
        // console.log("attributeChangedCallback")
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    connectedCallback() {
        super.connectedCallback()
            // console.log("connectedCallback")

        //상위 컴포넌트의 데이터를 가져옴.
        this.makeGrid();
    }
    static get properties() {
        return {
            name: { type: String },

            flag: { type: String },
            type: { type: String },
            bindRef: { type: String },

            json: { type: Object },

            /**
             * The number of times the button has been clicked.
             */
            count: { type: Number },
        };
    }
    constructor() {
        super();
        this.json = [];
        this.body = [];
        this.count = 10;
        this._bindRef = '';

    }
    updated() {
        // console.log(this.bindRef)
    }
    render() {
            return html `
        ${this.json.length !=0 
        ? html`<table id="example" class="display" style="width:100%">
          <thead >
              <tr>
                ${Object.keys(this.json[0]).map((element) => html`<th class="mytitle">${element}</th>`)}
              </tr>
          </thead>
          <tbody>
              ${this.body}
          </tbody>
        ${this.flag && this.flag.indexOf('no-footer')!=-1
            ? html`<tfoot></tfoot>`
            : html ` 
            <tfoot>
                <tr>
                    <th>footer</th>
                    <th>footer</th>
                    <th>footer</th>
                    <th>footer</th>
                    <th>footer</th>
                </tr>
            </tfoot>`}
        </table>`
        : html`<table></table>`
        }
        `
  }
  makeGrid() {
    this.json =  this.bindRef ? this.bindRef : []; 

    this.body = [];
    for(let i=0;i<this.json.length;i++){
      this.body.push(html`
      <tr>
        ${Object.values(this.json[i]).map((element,index) => 
            html`
                <td class="mybody">
                  ${this.type == 'link' && index==1
                    ? html`<a href=${element}>${element}</a>`
                    : html`${element}`}
                </td>
            `)}
      </tr>`);
    }
  }
  _onClick() {
    this.count++;
    this.name = 'World';
    this.json.push({"first_name":"Liliane","last_name":"O'Corrane","email":"locorrane9@guardian.co.uk","gender":"Female","ip_address":"94.38.74.50"})

    this.body.push(html`
    <tr>
      ${Object.values(this.json[this.json.length-1]).map((element) => html`<td class="mybody">${element}</td>`)}
    </tr>`);
  }

}

customElements.define('lit-grid', MyElement);