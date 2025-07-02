import Employee from '../Employee';
import "./Team.css";

const Team = ({ name, primaryColor, secondaryColor }) => {
  return (
    <section className="team" style={{ backgroundColor: primaryColor }}>
      <h3 style={{ borderColor: secondaryColor }}>{name}</h3>

      <Employee />
    </section>
  );
}

export default Team;
