import {LitElement, html} from '../../node_modules/lit-element/lit-element.js';

class MyElement extends LitElement {
  static get properties() {
    return {
      click: {type:Object}
    };
  }
  constructor() {
    super();
    this.name = 'NCRM';
    this.array = [1,2,3,4,5]
    this.count = 0;
    // this.addEventListener('click', this._handleFocus);
  }
  connectedCallback() {
    super.connectedCallback()
    console.log("connectedCallback111")
  }
  clickEvent01(event){
    console.log(event);
    this.click(event)
  }
  clickEvent02(){
    this.click()
  }
  clickEvent03(){
    this.click()
  }
  clickEvent03(){
    this.click()    
  }
  render() {
    return html`
      <link rel="stylesheet" href="../../css/default/common-4.x.css" type="text/css">
      <div class="caption-pnl">
          <h2>
              <span class="x-icon"></span>
              <span class="x-label">그리드 다건 선택 - checkbox &amp; sort</span>
          </h2>
          <span class="buttonset fr">
              <button @click="${this.clickEvent01}" class="doaction" id="btnRowAdd">행추가</button>
              <button @click="${this.clickEvent02}" class="doaction" id="btnRowDel">행삭제</button>
              <button @click="${this.clickEvent03}" type="button" class="doaction" id="btnFilter">필터</button>
              <button @click="${this.clickEvent04}" type="button" class="doaction" id="btnFilterClear">필터해제</button>
          </span>
      </div>
        `
  }
}

customElements.define('button-set', MyElement);