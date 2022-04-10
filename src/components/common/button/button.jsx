import React from 'react';
import './button.css';
import classNames from 'classnames';

function Button({
  children,
  onClick,
  className,
  disabled = false,
  active = false,
  ...rest
}) {
  const classes = classNames('btn', className, { active });

  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
