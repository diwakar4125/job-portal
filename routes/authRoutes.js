import express from 'express';
import { loginController, registerController } from '../controller/authController.js';

//router object
const router = express.Router();


//routes

// RESGISTER || POST
router.post('/register',registerController)

//LOGIG || POST
router.post('/login',loginController)

//export
export default router;