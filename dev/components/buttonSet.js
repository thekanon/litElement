import {LitElement, html} from '../../node_modules/lit-element/lit-element.js';

class MyElement extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="../../css/default/common-4.x.css" type="text/css">
      <div class="caption-pnl">
          <h2>
              <span class="x-icon"></span>
              <span class="x-label">그리드 다건 선택 - checkbox &amp; sort</span>
          </h2>
          <span class="buttonset fr">
              <button class="doaction" id="btnRowAdd">행추가</button>
              <button class="doaction" id="btnRowDel">행삭제</button>
              <button type="button" class="doaction" id="btnFilter">필터</button>
              <button type="button" class="doaction" id="btnFilterClear">필터해제</button>
          </span>
      </div>
        `
  }
}

customElements.define('button-set', MyElement);