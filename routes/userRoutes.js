import express from 'express';
import userAuth from '../middleware/authMiddleware.js';
import { updateUserController } from '../controller/userController.js';

//router object
const router = express.Router()


//UPDATE USER || put
router.put('/update-user',userAuth,updateUserController)

export default router;