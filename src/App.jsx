
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Banner, Form, TextInput, Team } from "./components";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front End",
      color: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const [teamMembers, setTeamMember] = useState([]);

  const handleEmployees = (employee) => {
    setTeamMember([...teamMembers, employee]);
  }

  const deleteEmployee = () => {
    console.log("deletando colaboradores");
  }

  function changeTeamColor(color, teamId) {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        team.color = color;
      }

      return team;
    }));
  }

  return (
    <>
      <Banner />
      
      <Form
        teams={teams.map(team => team.name)}
        onSaveNewEmployee={employee => handleEmployees(employee)}
      />

      {teams.map(team => {
        return (
          <Team
            key={team.id}
            id={team.id}
            name={team.name}
            color={team.color}
            teamMembers={
              teamMembers.filter(teamMember => teamMember.team === team.name)
            }
            onDeleteEmployee={deleteEmployee}
            changeColor={changeTeamColor}
          />
        );
      })}
    </>
  );
}

export default App;
