import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { logger } from "@tqman/nice-logger";

const app = new Elysia()
  .use(swagger())
  .use(logger({
    mode: "live",
    withTimestamp: true,
  }))
  .get('/', () => {
    return {
      msg: "lmao"
    }
  })
  .post('/calc', ({ body }) => body, {
    body: t.Object({
      num1: t.Number(),
      num2: t.Number()
    })
  })
  .listen(3000)


console.log(
  `Elysia at http://${app.server?.hostname}:${app.server?.port}`
);