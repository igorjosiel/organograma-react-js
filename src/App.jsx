
import { useState } from "react";
import { Banner, Form, TextInput, Team } from "./components";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      name: "Front End",
      color: "#E8F8FF",
    },
    {
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
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

  function changeTeamColor(color, teamName) {
    setTeams(teams.map(team => {
      if (team.name === teamName) {
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
            key={team.name}
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
