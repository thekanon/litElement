import {LitElement,html,css} from 'lit-element'

class MyElement extends LitElement {
    static get properties() {
        return {
            widgetNm:{}
        };
    }
    constructor() {
        super();
    }

    static get styles() {
        return css `
        .ram-widget-sample-container{
            display: inline-block;
            margin-bottom: 45px;
        }
        
        .ram-widget-sample-widget{
            width: 190px;
            height: 40px;
            padding: 10px 4px 0px;
            border-top: 4px solid rgb(121, 121, 121);
            margin: 0px 18px;
        }

        :host span{
            display: inline-block;
            width: 190px;
            font-family: "Noto Sans KR";
            font-size: 1.2em;
            cursor: pointer;
            -webkit-user-select: none; 
        }
        `;
    }

    render() {
        return html `<div class='ram-widget-sample-container'>
        <div class='ram-widget-sample-widget'>
            <slot></slot>
            </div>
            <span>
                ${this.widgetNm}
            </span>
        </div>`;
    }
}

customElements.define('ram-widget-sample', MyElement);