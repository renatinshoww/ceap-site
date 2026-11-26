import './Textarea.modules.css';

function Textarea({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = ''
}) {
  return (
    <div className="textarea-group">
      <label htmlFor={name} className="textarea-label">
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="textarea-field"
      />

      {error && (
        <span className="textarea-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default Textarea;