import hexToRgba from "hex-to-rgba";
import Employee from "../Employee";
import "./Team.css";

const Team = ({
  name,
  color,
  teamMembers,
  onDeleteEmployee,
  changeColor,
}) => {
  return (
    (teamMembers.length > 0) &&
    <section className="team" style={{ backgroundColor: hexToRgba(color, 0.6) }}>
      <input value={color} onChange={event => changeColor(event.target.value, name)} type="color" className="input-color" />

      <h3 style={{ borderColor: color }}>{name}</h3>

      <div className="teamMembers">
        {teamMembers.map(teamMember => {
          return (
            <Employee
              key={teamMember.name}
              name={teamMember.name}
              role={teamMember.role}
              image={teamMember.image}
              backgroundColor={color}
              onDelete={onDeleteEmployee}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Team;
