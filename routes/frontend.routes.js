import { Router } from "express";

const frontendRouter = Router();

frontendRouter.get("/", (req, res) => {
  res.render("frontend/index");
});

frontendRouter.get("/category", (req, res) => {
  res.render("frontend/category");
});

frontendRouter.get("/author", (req, res) => {
  res.render("frontend/author");
});

frontendRouter.get("/search", (req, res) => {
  res.render("frontend/search");
});

frontendRouter.get("/single", (req, res) => {
  res.render("frontend/single");
});

export default frontendRouter;
