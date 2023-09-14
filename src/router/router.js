import express from "express";
import mainController from '../controllers/main';

const route = express.Router();

//MainController
route.get('/', mainController.hello);
route.get('/seach', mainController.search);
route.get('/seach/:query', mainController.search);
export default route;