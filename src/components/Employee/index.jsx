import { RiCloseCircleFill } from "react-icons/ri";
import "./Employee.css";

const Employee = ({ name, role, image, backgroundColor, onDelete }) => {
  return (
    <div className="employee">
      <RiCloseCircleFill
        className="delete"
        size={25}
        color="#e53935"
        onClick={onDelete}
      />

      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default Employee;
