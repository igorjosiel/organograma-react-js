import hexToRgba from "hex-to-rgba";
import Employee from "../Employee";
import "./Team.css";

const Team = ({
  name,
  id,
  color,
  teamMembers,
  onDeleteEmployee,
  changeColor,
  onFavorite,
}) => {
  const handleColorChanging = (event) => {
    changeColor(event.target.value, id);
  }

  return (
    (teamMembers.length > 0) &&
    <section className="team" style={{ backgroundColor: hexToRgba(color, 0.6) }}>
      <input
        value={color}
        onChange={handleColorChanging}
        type="color"
        className="input-color"
      />

      <h3 style={{ borderColor: color }}>{name}</h3>

      <div className="teamMembers">
        {teamMembers.map(teamMember => {
          return (
            <Employee
              key={teamMember.id}
              teamMember={teamMember}
              backgroundColor={color}
              onDelete={onDeleteEmployee}
              onFavorite={onFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Team;
