import { Request, Response, Router } from "express"

const router = Router()
// GET /users
router.get("/api/hello", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
  })
})

export default router
