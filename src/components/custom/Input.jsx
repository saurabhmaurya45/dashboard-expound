import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      onChange,
      isTextArea,
      type = "text",
      name,
      className = "",
      labelClassName = "label-class",
      inputClassName = "input-field",
      textareaClassName = "textarea-field",
      error = null,
      required = false,
      placeholder = "",
      value = "",
      rows,
      ...rest
    },
    ref
  ) => {
    const inputId = `input-${name}`;
    return (
      <div className={`input-container ${className}`}>
        {label && (
          <label htmlFor={inputId} className={labelClassName}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        {!isTextArea ? (
          <input
            id={inputId}
            type={type}
            name={name}
            ref={ref}
            onChange={onChange}
            value={value}
            className={`${inputClassName} ${error ? "border-red-500" : ""}`}
            required={required}
            placeholder={placeholder}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...rest}
          />
        ) : (
          <textarea
            id={inputId}
            name={name}
            ref={ref}
            onChange={onChange}
            value={value}
            className={`${textareaClassName} ${error ? "border-red-500" : ""}`}
            rows={rows ?? 3}
            required={required}
            placeholder={placeholder}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...rest}
          ></textarea>
        )}

        {error && (
          <p id={`${inputId}-error`} className="text-red-500 mt-1 text-sm">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
