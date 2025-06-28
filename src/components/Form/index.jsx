import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import Button from '../Button';
import './Form.css';

function Form() {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log('Form foi submetido');
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput label="Nome" placeholder="Digite seu nome" required={true} />
        <TextInput label="Cargo" placeholder="Digite seu cargo" required={true} />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <SelectInput label="Times" items={teams} required={true} />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
