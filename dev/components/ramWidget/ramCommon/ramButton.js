import {LitElement,html,css} from 'lit-element'

class MyElement extends LitElement {
    static get properties() {
        return {
            buttonObj:{type:Object}
        };
    }
    constructor() {
        super();
        this.buttonObj={
            main:'',
            label:'label',
            event:{
                click:()=>{}
            }
        };
    }

    static get styles() {
        return css `
            :host button{
                height: 33px;
                padding: 0px 12px;
                font-family: 'Noto Sans KR';
                background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
                background-size:200%;
                transition: 0.3s;
                border: 1px solid #adadad;
                border-radius: 10px;
                cursor:pointer;
                color: #fff;
                font-weight: 500;
                font-size: 1rem;
            }

            :host button:hover{
                background-position-x: 100%;
                box-shadow: 4px 4px 1px 0px #00000044;
            }

            :host button:active{
                opacity:0.5;
            }

            :host button:focus{
                outline : none;
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    clickEvent(event){
        this.buttonObj.event.click(event,this.buttonObj.main,this);
    }

    render() {
        return html`
            <button @click=${this.clickEvent}>${this.buttonObj.label}</button>
        `;
    }
}

customElements.define('ram-button', MyElement);