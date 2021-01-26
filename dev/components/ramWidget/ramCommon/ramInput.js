import {LitElement,html,css} from 'lit-element'
import {styleMap} from '../../../../node_modules/lit-html/directives/style-map.js';

class MyElement extends LitElement {
    static get properties() {
        return {
            inputObj:{type:Object},
            data:{type:String}
        };
    }
    constructor() {
        super();
        this.data = '';
    }

    static get styles() {
        return css `
            :host input{
                border: 1px solid rgb(173, 173, 173);
                height: 30px;
                border-radius: 10px;
                width: 290px;
                font-weight: 300;
                font-family: "Noto Sans KR";
                padding: 0px 10px;
                text-shadow: rgb(150 150 150 / 25%) 3px 3px 2px;
            }

            :host input:focus{
                outline: none;
                box-shadow: 3px 3px 1px 0px #0000002e;
            }
            
        `;
    }

    set data(val){
        let oldVal = this._data;
        this._data = val;
        this.requestUpdate('data',oldVal)
    }

    get data(){
        return this._data;
    }

    keyupEvent(event){
        if(this.inputObj.event.keyup!=null)
        this.inputObj.event.keyup(event,this.inputObj.main,this)
        this.dataNxCheck(event);
    }

    update(){
        super.update();
    }
    updated(){
        super.updated();
    }

    connectedCallback() {
            super.connectedCallback()
            this.styles={};
            if(this.inputObj.style)
            Object.keys(this.inputObj.style).forEach(v=>{
                this.styles[v] = this.inputObj.style[v];
            })

            this.inputObj.event = this.inputObj.event ? this.inputObj.event : {};
            this.requestUpdate();
    }

    reSizing(){
        const wd = this.inputObj.size <50 ? this.inputObj.size*7.21 : 50*7.21;
        this.styles.width = wd+'px'
    }

    render() {
        this.reSizing();
        return html`
               <input style='${styleMap(this.styles)}' @keyup="${this.keyupEvent}" .value=${this.data} @click="${()=>{this.connectedCallback()}}">
        `;
    }

    dataNxCheck(event){
        this.data=event.target.value;
    }
}

customElements.define('ram-input', MyElement);