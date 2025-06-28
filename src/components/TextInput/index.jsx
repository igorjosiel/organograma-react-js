import './TextInput.css';

function TextInput({ label, placeholder }) {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
