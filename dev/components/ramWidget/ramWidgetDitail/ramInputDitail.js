import {LitElement,html,css, query} from '../../../../node_modules/lit-element/lit-element.js'
import "../ramCommon/ramCommon.js"

class MyElement extends LitElement {
    // 속성 정의
    static get properties() {
        return {
        };
    }

    //속성 초기화
    constructor() {
        super();
        this.inputObj1={
            main:this,
            style:{
                color:'white',
                background:'linear-gradient(to right, rgb(1, 201, 202) 0%, rgb(56, 134, 255) 100%)',
            },
            event:{
            },
            size:20,
            dataNx:'digit',
        }

        this.selectObj1={
            main:this,
            options:{
                digit:'digit',
                num:'num',
                nm:'nm',
                ssn:'ssn',
                kor:'kor',
            }
        }

        this.buttonObj1={
            main:this,
            label:'적용하기',
            event:{
                click:this.aplly
            }
        }
    }

    //css
    static get styles() {
        return css `
        :host table {
            border-top:1px solid black;
            padding-top:10px;
            font-family: "Noto Sans KR";
            font-size: 1.2em;
            margin: 40px auto 0
        }

        :host table tr{
            height:40px;
        }
        :host table tr td:first-child{
            text-align:right;
        }

        :host .fc{
            text-align:center !important;
        }
        `;
    }

    //dom 로드시 실행
    connectedCallback() {
        super.connectedCallback()
    }

    test(e,main,target){
        console.log(target.inputObj.data)
        main.inputObj1.size = target.inputObj.data;
        main.inputObj1 = {...main.inputObj1}
        if(e.code == 'Enter') 
        main.requestUpdate()
    }

    aplly(e,main,target){
        main.requestUpdate()
    }
    
    render() {

        return html`<div>
        <ram-input  
            .inputObj="${this.inputObj1}"
        ></ram-input>

        <table>
            <tr>
                <td>size : </td>
                <td><ram-input .inputObj="${{
                    data:20,
                    main:this,
                    size:3,
                    event:{
                        change:this.test
                    }}}"></ram-input></td>
            </tr>
            <tr>
                <td>data-nx : </td>
                <td><ram-select  .selectObj=${this.selectObj1}></ram-select></td>
            </tr>
            <tr><td colspan=2 class='fc'><ram-button .buttonObj="${this.buttonObj1}"></ram-button></td></tr>
            
        </table>
        </div>`;
    }
}

customElements.define('ram-input-datail', MyElement);