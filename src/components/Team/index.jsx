import Employee from "../Employee";
import "./Team.css";

const Team = ({ name, primaryColor, secondaryColor, teamMembers }) => {
  return (
    (teamMembers.length > 0) &&
    <section className="team" style={{ backgroundColor: primaryColor }}>
      <h3 style={{ borderColor: secondaryColor }}>{name}</h3>

      <div className="teamMembers">
        {teamMembers.map(teamMember => {
          return (
            <Employee
              name={teamMember.name}
              role={teamMember.role}
              image={teamMember.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Team;
