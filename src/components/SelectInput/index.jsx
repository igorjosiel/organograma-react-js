import './SelectInput.css';

function SelectInput({ label, items, required }) {
  return (
    <div className="select-input">
      <label>{label}</label>
      <select required={required}>
        {items.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default SelectInput;
