
import { useState } from "react";
import { Banner, Form, TextInput } from "./components";
import "./App.css";

function App() {
  const [teamMembers, setTeamMember] = useState([]);

  const handleEmployees = (employee) => {
    setTeamMember([...teamMembers, employee]);
  }

  return (
    <>
      <Banner />
      <Form onSaveNewEmployee={employee => handleEmployees(employee)} />
    </>
  );
}

export default App;
