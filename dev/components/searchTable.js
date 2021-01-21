import { LitElement, html } from '../../node_modules/lit-element/lit-element.js';

class MyElement extends LitElement {
    render() {
        return html `
      <link rel="stylesheet" href="../../css/default/common-4.x.css" type="text/css">
      <div class="search" tabindex="0">
          <table>
              <colgroup> 
                  <col width="15%">
                  <col width="*">
              </colgroup>
              <tbody>
                  <tr>
                      <th>그리드 선택</th>
                      <td>
                          <slot></slot>
                          <span class="selection-grp">
                              <input type="radio" value="0" name="rdoUseYn" id="rdoUseYn0" checked>
                              <label for="rdoUseYn0">
                                  <em>Grid Radio</em>
                              </label>
                              <input type="radio" value="1" name="rdoUseYn" id="rdoUseYn1">
                              <label for="rdoUseYn1">
                                  <em>Grid Checkbox</em>
                              </label>
                          </span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

        `
    }
}

customElements.define('search-table', MyElement);