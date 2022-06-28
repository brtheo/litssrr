import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import koaStatic from "koa-static";
import compress from "koa-compress";
import { nodeResolve } from "koa-node-resolve";
import { Readable } from "stream";
import { render } from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import { myTemplate } from "./my-template.js";

const PORT = process.env.PORT || 8000;

const app = new Koa();
const router = new Router();

const initialData = {
  text: "Inside Shadow DOM"
};

router.get("/", (ctx) => {
  const ssrResult = render(myTemplate(initialData));
  ctx.response.type = "html";
  ctx.body = Readable.from(ssrResult);
});

app
  .use(logger())
  .use(bodyParser())
  .use(nodeResolve())
  .use(koaStatic("."))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(compress())
  .listen(PORT, "0.0.0.0", () =>
    console.log(`listening on http://localhost:${PORT}...`)
  );
