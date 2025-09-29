import expres from "express";
import frontendRouter from "./routes/frontend.routes.js"
import userRouter from "./routes/user.routes.js";
import expressLayouts from "express-ejs-layouts";
import connectDB from "./config/connectDB.js";
import path from "path";

const port = process.env.PORT;
const app = expres();

app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(expres.static(path.join(process.cwd(), "public")));

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");
app.set("layout", "frontend/layouts");


app.use("/", userRouter)
app.use("/", frontendRouter)

connectDB();
app.listen(port, () => console.log(`app is connected on ${port}`));
