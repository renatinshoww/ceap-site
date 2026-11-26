import './Select.modules.css';

function Select({
  label,
  name,
  value,
  onChange,
  error,
  options = []
}) {
  return (
    <div className="select-group">
      <label htmlFor={name} className="select-label">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="select-field"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      {error && (
        <span className="select-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default Select;