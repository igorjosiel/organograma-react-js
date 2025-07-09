import { RiCloseCircleFill } from "react-icons/ri";
import "./Employee.css";

const Employee = ({ teamMember, backgroundColor, onDelete }) => {
  return (
    <div className="employee">
      <RiCloseCircleFill
        className="delete"
        size={25}
        color="#e53935"
        onClick={() => onDelete(teamMember.id)}
      />

      <div className="header" style={{ backgroundColor }}>
        <img src={teamMember.image} alt={teamMember.name} />
      </div>
      <div className="footer">
        <h4>{teamMember.name}</h4>
        <h5>{teamMember.role}</h5>
      </div>
    </div>
  );
}

export default Employee;
