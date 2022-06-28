import { LitElement, html } from "lit";

class CustomBlock extends LitElement {
  render() {
    return html`
      <style>
        .block {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          background-color: skyblue;
        }
      </style>
      <div class="block">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("custom-block", CustomBlock);
