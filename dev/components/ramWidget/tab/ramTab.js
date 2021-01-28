import {LitElement,html,css} from '../../../../node_modules/lit-element/lit-element.js';
import {styleMap} from '../../../../node_modules/lit-html/directives/style-map.js';
import "../tab/ramTabHeader.js";

class MyElement extends LitElement {
    static get properties() {
        return {
            tabName:{type:Array},
            tabContents:{type:Array},
            clickedTab:{type:Object},
            myBarStyle:{type:Object}
        };
    }
    constructor() {
        super();
        this.tabContents =[];
        this.clickedTab={};
        this.myBarStyle={};
    }

    static get styles() {
        return css `
            .tab-container{
                width:100%;
                display:inline-block;
            }

            .ram-tab-body{
            }

            .ram-tab-bar{
                width: 100%;
                height: 7px;
                display: inline-block;
                margin-top: -11px;
                vertical-align: top;
                text-align: left;
            }

            .ram-tab-selected{
                width: 50px;
                height: 7px;
                background: red;
                display: inline-block;
                transition:all 0.5s cubic-bezier(0.22, 0.12, 0, 1.21) 0s;;
                margin-left:0;
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
        this.tabName.forEach((v,i)=>{
            this.clickedTab[v] = i==0? true :false;
        })

        this.myBarStyle={width:100/this.tabName.length+'%'}
        console.log(this.clickedTab)
    }

    changeTab(event,main,target){
        Object.keys(main.clickedTab).forEach(v=>{
            main.clickedTab[v]=(target.label == v);
        })
        main.clickedTab = {...main.clickedTab};
        main.myBarStyle['margin-left'] = (100/(main.tabName.length))*target.index+'%';
        console.log(main.myBarStyle)
        main.requestUpdate()
    }

    render() {
        return html`
            <div class='tab-container'>
                ${this.tabName.map((data,i)=>{
                    return html`
                    <ram-tab-header index =${i} ?clicked = ${this.clickedTab[data]} label=${data} .main="${this}"></ram-tab-header>`
                })}
                <span class='ram-tab-bar'><span style='${styleMap(this.myBarStyle)}' class='ram-tab-selected'></span></span>
                ${this.tabName.map(data=>{
                    return html`<div class='ram-tab-body'><slot name="${data}"></slot></div>`
                })}
            </div>
        `;
    }
}

customElements.define('ram-tab', MyElement);