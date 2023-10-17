import express from "express";
import router from "./src/router/router.js";
import { engine } from "express-handlebars";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/src/views/layouts`,
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);
app.use('/public', express.static(`${__dirname}/public`));
app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist/`));
app.use("/js", [
  express.static(`${__dirname}/public/js`),
  express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
]);

app.use(router);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
