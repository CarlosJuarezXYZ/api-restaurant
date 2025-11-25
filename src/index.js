import express from "express";
import cors from "cors";
import dishRouter from "./routes/dishRoute.js";
import commentsRoute from "./routes/commentsRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import reservationRoute from "./routes/reservationRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/comments", commentsRoute);
app.use("/categories", categoryRouter);
app.use ("/reservations", reservationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
