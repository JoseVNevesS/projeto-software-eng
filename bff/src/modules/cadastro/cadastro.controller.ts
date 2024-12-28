import { Request, Response } from "express";
import CadastroService from "./cadastro.service";

export default class CadastroController {
    private service = new CadastroService();

    async cadastrar(req: Request, res: Response) {
        // const {nome, email} = req.body

        const cadastro = await this.service.cadastrar("Jose Vitor", "josevneves@outlook.com", "BYD", "Dolphin")

        if (cadastro) {
            return res.status(200).json({message: "Cadastro realizado com sucesso"})
        } else {
            return res.status(500).json({message: "Erro ao cadastrar usuário"})
        }
    }
}