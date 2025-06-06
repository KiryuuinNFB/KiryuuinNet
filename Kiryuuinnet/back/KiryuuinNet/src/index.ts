import { Elysia, file} from "elysia";
import { quote } from "./quote";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia();



console.log(
  `Elysia at http://${app.server?.hostname}:${app.server?.port}`
);
