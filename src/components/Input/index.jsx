import './Input.css';

function Input({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  required = false
}) {
  const handleValue = (event) => {
    onChange(event.target.value);
  }

  return (
    <div className={`input ${type}-input`}>
      <label>{label}</label>
      
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={handleValue}
      />
    </div>
  );
}

export default Input;
