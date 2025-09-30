import { Router } from "express";
import {postByCategory, index, singlePost, postByAuthor, search, addComment} from "../controllers/frontend.controller.js" 

const frontendRouter = Router();

frontendRouter.get("/", index);

frontendRouter.get("/category/:name", postByCategory);

frontendRouter.get("/single/:id", singlePost);

frontendRouter.get("/author/:name", postByAuthor);

frontendRouter.get("/search", search);

frontendRouter.post("/single/:id", addComment);

export default frontendRouter;
