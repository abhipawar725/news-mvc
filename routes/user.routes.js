import { Router } from "express";
import {createUser, readUser, updateUser, deleteUser} from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.get('/user', readUser)
userRouter.post('/user', createUser)
userRouter.put('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)

export default userRouter;