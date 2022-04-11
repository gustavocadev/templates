import express from "express"
import usersRoutes from "./routes/users.routes"
import morgan from "morgan"

const app = express()

app.use(express.json()) // to allow parsing json data from the request body
app.use(morgan("dev")) // to log all requests

app.use(usersRoutes) // to use the users routes

app.listen(3000, () => {
  console.log("Server is running on port 3000 🎉")
})
