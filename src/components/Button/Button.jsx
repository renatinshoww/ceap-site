import './Button.css';

function Button({
  variant = 'primary',
  onClick,
  href,
  children,
  disabled = false,
  type = 'button'
}) {
  const className = `button button--${variant}`;

  // Se receber href, funciona como link
  if (href) {
    return (
      <a
        className={className}
        href={disabled ? undefined : href}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </a>
    );
  }

  // Caso contrário, funciona como botão
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
