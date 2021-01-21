import {LitElement,html,css} from '../../../node_modules/lit-element/lit-element.js'

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
        return css ``;
    }

    //dom 로드시 실행
    connectedCallback() {
        super.connectedCallback()
    }
    
    render() {
        return html `<div>testasdasd</div>`;
    }
}

customElements.define('test-element', MyElement);