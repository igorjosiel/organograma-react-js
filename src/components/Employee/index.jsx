import { RiCloseCircleFill } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Employee.css";

const Employee = ({ teamMember, backgroundColor, onDelete, onFavorite }) => {
  function handleDelete() {
    onDelete(teamMember.id);
  }
  
  function handleFavorite() {
    onFavorite(teamMember.id);
  }

  const propsFavorite = {
    size: 25,
    onClick: handleFavorite,
  }

  return (
    <div className="employee">
      <RiCloseCircleFill
        className="delete"
        size={25}
        color="#e53935"
        onClick={handleDelete}
      />

      <div className="header" style={{ backgroundColor }}>
        <img src={teamMember.image} alt={teamMember.name} />
      </div>
      <div className="footer">
        <h4>{teamMember.name}</h4>
        <h5>{teamMember.role}</h5>

        <div className="favorite">
          {teamMember.favorite
            ? <AiFillHeart {...propsFavorite} color="#e53935" />
            : <AiOutlineHeart {...propsFavorite} />
          }
        </div>
      </div>
    </div>
  );
}

export default Employee;
