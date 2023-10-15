import express from "express";
import router from "./src/router/router";
import { engine } from "express-handlebars";

const app = express();



app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/src/views/layouts`,
  defaultLayout : 'main',
}));
//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
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/src/views`);
app.use('/public', express.static(__dirname + "/public"));

app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/css", express.static(`${__dirname}/public/css`));
//app.use("/webfonts", express.static(`${__dirname}/node_modules/@fontawesome/fontawesome-free/webfonts`));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use("/js", [
    express.static(`${__dirname}/public/js`),
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
   // express.static(`${__dirname}/node_modules/@popperjs/core/dist/umd/`)
]);

app.use(router);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
