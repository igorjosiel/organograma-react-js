import { useState } from "react";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import Button from "../Button";
import "./Form.css";

function Form({ onSaveNewEmployee }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

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

    onSaveNewEmployee({ name, role, team, image });
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={name => setName(name)}
          required={true}
        />

        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChange={role => setRole(role)}
          required={true}
        />

        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          onChange={image => setImage(image)}
        />

        <SelectInput
          label="Times"
          items={teams}
          value={team}
          onChange={team => setTeam(team)}
          required={true}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
