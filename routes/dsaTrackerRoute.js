import express from 'express';
import { getQuestionsByTopicsController } from '../controllers/problemController.js';


//router object
const router = express.Router();

//routing 

router.post("/home", getQuestionsByTopicsController);


export default router;