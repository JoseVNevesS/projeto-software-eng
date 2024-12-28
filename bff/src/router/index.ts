import express from 'express'
import cadastroRouter from '../modules/cadastro/cadastro.router'

const router = express.Router()

router.use("/cadastro", cadastroRouter)

export default router