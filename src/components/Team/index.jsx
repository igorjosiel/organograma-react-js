import Employee from '../Employee';
import "./Team.css";

const Team = ({ name, primaryColor, secondaryColor, employees }) => {
  return (
    employees.length > 0 &&
    <section className="team" style={{ backgroundColor: primaryColor }}>
      <h3 style={{ borderColor: secondaryColor }}>{name}</h3>

      <div className="employees">
        {employees.map(employee => {
          return (
            <Employee name={employee.name} role={employee.role} image={employee.image} />
          );
        })}
      </div>
    </section>
  );
}

export default Team;
