import express, { Request } from 'express'
import CadastroController from './cadastro.controller'

const cadastroRouter = express.Router()
const cadastroController = new CadastroController()

cadastroRouter.get("/", (req, res) => cadastroController.cadastrar(req, res))

export default cadastroRouter