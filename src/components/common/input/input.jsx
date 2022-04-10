import React from 'react';
import './input.css';

const Input = React.forwardRef(
  ({ id, className, label, error, ...rest }, ref) => {
    return (
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label
            className={
              error ? 'input__label input__label_invalid' : 'input__label'
            }
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          name={id}
          className={error ? 'input input_invalid' : 'input'}
          {...rest}
        />
        {error && <span className="input__error">{error}</span>}
      </div>
    );
  }
);

export default Input;
