import Fastify from "fastify"
import UserRoutes from "./routes/users.routes"

const app = Fastify()
app.register(UserRoutes)

app.listen({ port: 3000 }, () => {
  console.log("Listening on port 3000 🎉")
})
