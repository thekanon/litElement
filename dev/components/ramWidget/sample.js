import {LitElement,html,css} from '../../../node_modules/lit-element/lit-element.js';
import {classMap,} from '../../../../node_modules/lit-html/directives/class-map.js';
import {styleMap} from '../../../../node_modules/lit-html/directives/style-map.js';

class MyElement extends LitElement {
    // 속성 정의
    static get properties() {
        return {
        };
    }

    //속성 초기화
    constructor() {
        super();
    }

    //css
    static get styles() {
        return css `
            :host{
                color:red
            }

            ::slotted(span){
                color:blue
            }

            .bgBlue{
                background:blue;
            }

            .bgRed{
                background:red;
            }
        `;
    }

    //dom 로드시 실행
    connectedCallback() {
        super.connectedCallback()

        this.myStyle = {
            background:'green'
        }

        this.myClass = {
            bgBlue:true,
            bgRed:false
        }
    }
    
    //화면에 표시되는 부분
    render() {
        return html`<div>
        <span style='${styleMap(this.myStyle)}'  >슬롯 시작전</span>
        <slot></slot>
        <span class=${classMap(this.myClass)}>슬롯 끝난후</span>
        </div>`;
    }
}

customElements.define('my-element', MyElement);