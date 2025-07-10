
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

  const [teamMembers, setTeamMembers] = useState([]);

  const handleEmployees = (employee) => {
    setTeamMembers([...teamMembers, employee]);
  }

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  }

  const deleteEmployee = (id) => {
    const newTeamMembers = teamMembers.filter(teamMember => teamMember.id !== id);

    setTeamMembers(newTeamMembers);
  }

  function changeTeamColor(color, teamId) {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        team.color = color;
      }

      return team;
    }));
  }

  function getTeamsNames() {
    return teams.map(team => team.name);
  }

  function filterTeamMembers(team) {
    return teamMembers.filter(teamMember => teamMember.team === team.name);
  }

  return (
    <>
      <Banner />
      
      <Form
        teams={getTeamsNames()}
        onSaveNewTeam={team => createTeam(team)}
        onSaveNewEmployee={employee => handleEmployees(employee)}
      />

      {teams.map(team => {
        return (
          <Team
            key={team.id}
            id={team.id}
            name={team.name}
            color={team.color}
            teamMembers={filterTeamMembers(team)}
            onDeleteEmployee={deleteEmployee}
            changeColor={changeTeamColor}
          />
        );
      })}
    </>
  );
}

export default App;
