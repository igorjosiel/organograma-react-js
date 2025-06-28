import './SelectInput.css';

function SelectInput({ label, items, value, onChange, required }) {
  const handleValue = (event) => {
    onChange(event.target.value);
  }

  return (
    <div className="select-input">
      <label>{label}</label>
      <select required={required} value={value} onChange={handleValue}>
        {items.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default SelectInput;
