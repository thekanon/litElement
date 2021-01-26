import {LitElement,html,css} from 'lit-element'

class MyElement extends LitElement {
    static get properties() {
        return {
            tabName:{type:Array},
            tabContents:{type:Array},
        };
    }
    constructor() {
        super();
        this.tabContents =[];
    }

    static get styles() {
        return css `
            :host button{
                height: 33px;
                padding: 0px 12px;
                font-family: 'Noto Sans KR';
                background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
                background-size:200%;
                transition: 0.7s;
                border: 1px solid #adadad;
                border-radius: 10px;
                cursor:pointer;
                color: #fff;
                font-weight: 500;
                font-size: 1rem;
            }

            :host button:hover{
                background-position-x: 100%;
                box-shadow: 5px 5px 1px 0px #00000044;
            }

            :host button:focus{
                outline : none;
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html`
            <button>Button</button>
        `;
    }
}

customElements.define('ram-button', MyElement);