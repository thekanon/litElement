import {LitElement,html,css} from '../../../node_modules/lit-element/lit-element.js'

class MyElement extends LitElement {
    static get properties() {
        return {
            widgetNm:{},
        };
    }
    constructor() {
        super();
    }

    static get styles() {
        return css `
        :host{
            -webkit-user-select: none; 
            cursor:pointer;
            position: relative;
        }

        .ram-widget-sample-container{
            display: inline-block;
            margin: 15px 40px;
            padding: 0px 5px 0px;
            border-image-slice: 1;
            position: relative;
            transition:0.4s;
            vertical-align: top;
            font-weight:1000 ;
        }

        .ram-widget-sample-container:hover{
            margin-top:0px;
            padding-bottom:15px;
            background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }


        .ram-widget-sample-container::before{
            content: "";
            background: linear-gradient(to right, #01c9ca 0%, #3886FF 100%);
            width: 90%;
            height: 10px;
            display: block;
            margin: 9px auto 0px;
            transition: all 0.4s ease 0s;
        }

        .ram-widget-sample-container:hover::before{
            width: 0%;
        }
        
        .ram-widget-sample-widget{
            width: 125px;
            padding: 10px 4px 0px;
            margin: 0px auto;
            display:none;
        }

        :host span{
            display: inline-block;
            font-family: "Noto Sans KR";
            font-size: 1.2em;
            cursor: pointer;
            user-select: none;
            width: 150px;
            transition:0.4s;
            color: #3ab0ea;
        }

        :host span:hover{ 
        }
        
        .ram-widget-sample-container::after{
            content: "";
            background: linear-gradient(to right, #01c9ca 0%, #c471ed 100%);
            width: 0px;
            height: 10px;
            display: block;
            margin: 9px auto 0 auto;
            transition:0.4s;
        }

        .ram-widget-sample-container:hover::after{
            width: 90%;
        }
        `;
    }

    render() {
        return html `<div class='ram-widget-sample-container' >
        <span>
            <${this.widgetNm}/>
        </span>
        </div>`;
    }

    mouseOver(){

    }
        // <div class='ram-widget-sample-widget'>
        //     <slot></slot>
        //     </div>
}

customElements.define('ram-widget-title-element', MyElement);