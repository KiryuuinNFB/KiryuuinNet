import { Elysia} from "elysia";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia().use(swagger());

app.get('/', () => {
  return {
    msg: "lmao"
  }
})

console.log(
  `Elysia at http://${app.server?.hostname}:${app.server?.port}`
);
