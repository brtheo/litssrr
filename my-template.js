import { html } from "lit";
import "./components/custom-block.js";

export const myTemplate = (initialData) => {
  return html`
    <html>
      <head>
        <title>Lit SSR</title>
      </head>
      <body>
        <custom-block>
          ${initialData.text}
        </custom-block>

        <style>
          .block {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            background-color: pink;
          }
        </style>
        <div class="block">
          Outside Shadow DOM
        </div>

        <script type="module">
          import "lit/experimental-hydrate-support.js";
          import {
            hasNativeDeclarativeShadowRoots,
            hydrateShadowRoots
          } from "@webcomponents/template-shadowroot/template-shadowroot.js";

          if (!hasNativeDeclarativeShadowRoots) {
            hydrateShadowRoots(document.body);
          }

          import("./components/custom-block.js");
        </script>
      </body>
    </html>
  `;
};
