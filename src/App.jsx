
import { useState } from "react";
import { Banner, Form, TextInput, Team } from "./components";
import "./App.css";

function App() {
  const teams = [
    {
      name: "Programação",
      secondaryColor: "#57C278",
      primaryColor: "#D9F7E9",
    },
    {
      name: "Front End",
      secondaryColor: "#82CFFA",
      primaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      secondaryColor: "#A6D157",
      primaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      secondaryColor: "#E06B69",
      primaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      secondaryColor: "#DB6EBF",
      primaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      secondaryColor: "#FFBA05",
      primaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      secondaryColor: "#FF8A29",
      primaryColor: "#FFEEDF",
    },
  ];

  const [teamMembers, setTeamMember] = useState([]);

  const handleEmployees = (employee) => {
    setTeamMember([...teamMembers, employee]);
  }

  return (
    <>
      <Banner />
      <Form onSaveNewEmployee={employee => handleEmployees(employee)} />

      {teams.map(team => {
        return (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
          />
        );
      })}
    </>
  );
}

export default App;
