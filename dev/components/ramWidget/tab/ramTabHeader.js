import {LitElement,html,css} from '../../../../node_modules/lit-element/lit-element.js';
import {classMap,} from '../../../../node_modules/lit-html/directives/class-map.js';
import {styleMap} from '../../../../node_modules/lit-html/directives/style-map.js';

class MyElement extends LitElement {
    static get properties() {
        return {
            label:{},
            main:{type:Object},
            clicked:{type:Boolean},
            index:{}
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return css `
        .ram-tab-header{
            width: 100px;
            height: 30px;
            display: inline-block;
            cursor: pointer;
            font-family: 'Noto Sans KR';
            font-weight: 500;
            font-size: 1.2em;
        }

        :host .clicked{
        }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
        
    }

    uptdat(){
    }

    clickE(event){
        this.main.changeTab(event,this.main,this);
    }
    
    render() {
        this.myClass ={
            clicked:this.clicked,
        }
        return html`<span class='ram-tab-header ${classMap(this.myClass)}' tabName='${this.label}' @click="${this.clickE}">${this.label}</span>`;
    }
}

customElements.define('ram-tab-header', MyElement);