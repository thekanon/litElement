import {LitElement,html,css} from 'lit-element'

class MyElement extends LitElement {
    static get properties() {
        return {
            selectObj:{type:Object},
        };
    }
    constructor() {
        super();

    }

    static get styles() {
        return css `
            :host select{
                height: 30px;
                border: 1px solid #adadad;
                border-radius: 10px;
                padding: 0px 10px;
                font-family: 'Noto Sans KR';
            }

            :host select:focus{
                outline:none;
                box-shadow: 3px 3px 1px 0px #0000002e;
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        console.log(this.selectObj.options);
        if(this.selectObj.options == undefined)
        this.selectObj = {
            options:{
                test1:'test1',
                test2:'test2',
                test3:'test3',
                test4:'test4',
            }
        }
        return html `
            <select>${Object.keys(this.selectObj.options).map(option=>{
                    return html`<option key=${this.selectObj.options[option]}>${option}</option>`
                }
            )}</select>
        `;
    }
}

customElements.define('ram-select', MyElement);