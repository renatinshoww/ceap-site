import './Input.modules.css';

function Input({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = ''
}) {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />

      {error && (
        <span className="input-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;