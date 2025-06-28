import TextInput from '../TextInput';
import './Form.css';

function Form() {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
}

export default Form;
