import { RequestHandler } from "express"
import path from "path"

export const getRoot: RequestHandler = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"))
}
