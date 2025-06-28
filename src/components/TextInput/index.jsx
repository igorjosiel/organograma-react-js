import './TextInput.css';

function TextInput({ label, placeholder, required }) {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input required={required} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
