import Fastify from "fastify"
import helloRoutes from "./routes/hello.routes"

const app = Fastify()

// Register routes
app.register(helloRoutes)

// Run the server!
const PORT = process.env.PORT ?? 4000
app.listen({ port: PORT as number }, () => {
  console.log(`Listening on port ${PORT} 🎉`)
})
