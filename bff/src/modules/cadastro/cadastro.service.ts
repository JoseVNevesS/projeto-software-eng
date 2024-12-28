import KafkaConfig from "../../config/kafka";

export default class CadastroService {
  private kafkaConfig = new KafkaConfig()

  async cadastrar(nome: string, email: string, marca: string, modelo: string) {
    const messages = [{key: "register", value: JSON.stringify({
      nome,
      email,
      marca,
      modelo
    })}]
    this.kafkaConfig.produce('user-registration', messages)
    return true
  }
}