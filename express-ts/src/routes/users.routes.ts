import { Router } from "express"
import { randomUUID } from "crypto"
const router = Router()

const users = [
  {
    id: randomUUID(),
    name: "John Doe",
    email: "email@email.com",
  },
]

// GET /users
router.get("/", (req, res) => {
  res.json(users)
})

export default router
