import './TextInput.css';

function TextInput({ label, placeholder, value, onChange, required }) {
  const handleValue = (event) => {
    onChange(event.target.value);
  }

  return (
    <div className="text-input">
      <label>{label}</label>
      
      <input
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={handleValue}
      />
    </div>
  );
}

export default TextInput;
