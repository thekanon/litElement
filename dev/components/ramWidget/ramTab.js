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
            .tab-container{
                width:100%;
                display:inline-block;
            }

            .ram-tab-body{
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html `
            <div class='tab-container'>
                ${this.tabName.map(data=>{
                    return html`<span class='ram-tab-header'>${data}</span>`
                })}
                ${this.tabName.map(data=>{
                    return html`<div class='ram-tab-body'><slot name="${data}"></slot></div>`
                })}
            </div>
        `;
    }
}

customElements.define('ram-tab', MyElement);