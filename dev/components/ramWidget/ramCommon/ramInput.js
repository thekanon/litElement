import {LitElement,html,css} from 'lit-element'
import {styleMap} from '../../../../node_modules/lit-html/directives/style-map.js';

class MyElement extends LitElement {
    static get properties() {
        return {
            inputObj:{type:Object},
        };
    }
    constructor() {
        super();
        this.inputObj = {
            data:'',
            main:this,
            style:{
            },
            event:{
            },
            size:5,
            dataNx:'kor',
        }
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
    
    changeEvent(event){
        if(this.inputObj.event.change!=null)
        this.inputObj.event.change(event,this.inputObj.main,this)
    }

    keydownEvent(event){
        if(this.inputObj.event.keydown!=null)
        this.inputObj.event.keydown(event,this.inputObj.main,this)
    }

    update(){
        super.update();
    }
    updated(){
        super.updated();
    }

    connectedCallback() {
            super.connectedCallback()
            this.myStyle={};
            if(this.inputObj.style)
            Object.keys(this.inputObj.style).forEach(v=>{
                this.myStyle[v] = this.inputObj.style[v];
            })
            if(this.inputObj.data == undefined)
            this.inputObj.data =  '';

            this.requestUpdate();
    }

    reSizing(){
        const wd = this.inputObj.size <50 ? this.inputObj.size*7.21 : 50*7.21;
        this.myStyle.width = wd+'px'
    }

    render() {
        this.reSizing();
        return html`
               <input style='${styleMap(this.myStyle)}'
                @keyup="${this.keyupEvent}" 
                @keydown="${this.keydownEvent}" 
                @change="${this.changeEvent}"
                .value=${this.inputObj.data} >
        `;
    }

    dataNxCheck(event){
        this.inputObj.data=event.target.value;
        switch(this.inputObj.dataNx){
            case 'digit':{
                if(event.code.indexOf('Digit')){
                    console.log('안됨')
                    this.inputObj = {...this.inputObj};
                }
            }
        }
    }
}

customElements.define('ram-input', MyElement);