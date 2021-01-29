import express, { Express } from "express"
const app: Express = express()
import morgan from "morgan"
import routes from "./routes/routes"
import { connectToDb } from "./db/database"
import cors from "cors"

// Here is the function fro connect the db
connectToDb()

const PORT: number | string = process.env.DB_PORT ? process.env.DB_PORT : 4000
app.set("port", PORT)
// port variable
const port: string = app.get("port")

// Middlewares
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))

app.listen(port, (): void => {
  console.log("- Server on port", port)
})

// Routes
routes(app)
