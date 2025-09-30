import {Router} from "express"
import { addPage, allUsers, update, updatePage, add, remove } from "../controllers/users.controller.js";

const usersRoute = Router()

usersRoute.get("/users", allUsers)

usersRoute.get("/users/add", addPage)
usersRoute.post("/users/add", add)

usersRoute.get("/users/update", updatePage)
usersRoute.post("/users/update/:id", update)

usersRoute.post("/users/delete/:id", remove)

export default usersRoute;