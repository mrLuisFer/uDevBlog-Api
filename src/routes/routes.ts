import { Express, Router } from "express"
import * as controller from "./controllers/_index"
const router: Router = Router()

// Rutas
export default function getRoutes(app: Express): void {
  app.use("/", router.get("/", controller.getRoot))
  app.use("/home", router.get("/home", controller.getPots))
  app.use("/home", router.post("/home", controller.postPosts))
  app.use("/article/:id", router.get("/article/:id", controller.getArticle))
  app.use("/article/:id", router.delete("/article/:id", controller.deletePost))
  app.use("/article/:id", router.put("/article/:id", controller.putPost))
}
