import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import Button from "../Button";
import "./Form.css";

function Form({ teams, onSaveNewEmployee, onSaveNewTeam }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSave = (event) => {
    event.preventDefault();

    onSaveNewEmployee({ id: uuidv4(), name, role, team, image });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  }

  const onSaveTeam = (event) => {
    event.preventDefault();

    onSaveNewTeam({ name: teamName, color: teamColor });

    setTeamName("");
    setTeamColor("");
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
          required
        />

        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChange={role => setRole(role)}
          required
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
          required
        />

        <Button>Criar Card</Button>
      </form>
      <form onSubmit={onSaveTeam}>
        <h2>Preencha os dados para criar um novo time.</h2>

        <TextInput
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          onChange={teamName => setTeamName(teamName)}
          required
        />

        <TextInput
          label="Cor"
          placeholder="Digite a cor do time"
          value={teamColor}
          onChange={teamColor => setTeamColor(teamColor)}
          required
        />

        <Button>Criar Time</Button>
      </form>
    </section>
  );
}

export default Form;
