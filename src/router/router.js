import express from "express";
import * as mainController from '../controllers/main.js';

const route = express.Router();

//MainController
route.get('/', mainController.hello);
route.get('/seach', mainController.search);
route.get('/seach/:query', mainController.search);
route.get('/bert', mainController.bert);
route.get('/bert/:query', mainController.bert);
export default route;