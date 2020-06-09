import React, { useState } from "react";
import { validateValue } from "../../assets/utils";
import "./inputs.scss";

const PrimaryInput = ({
  value,
  placeHolder = "Input",
  onChange,
  autoFocus = false,
  type = "text",
  disabled = false,
  isRequired = false,
  isSelect = false,
  optionsSelect = [],
}) => {
  const [labelIsUp, setLabelIsUp] = useState(validateValue(value));

  const onFocus = () => setLabelIsUp(true);
  const onBlur = () => {
    if (!validateValue(value)) {
      setLabelIsUp(false);
    }
  };

  return (
    <div className="container-input">
      <label className="input-mask">
        {!isSelect ? (
          <span
            className={
              labelIsUp ? "label-input label-up" : "label-input label-down"
            }
          >
            {" "}
            {placeHolder}
            {isRequired && <span className="required-dot"></span>}
          </span>
        ) : null}

        <div className="input-content">
          {isSelect ? (
            <select value={value} onChange={onChange} required={isRequired}>
              <option>{placeHolder}</option>
              {optionsSelect.sort().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              disabled={disabled}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              autoFocus={autoFocus}
              onBlur={onBlur}
              type={type}
              required={isRequired}
            />
          )}
        </div>
      </label>
    </div>
  );
};

export { PrimaryInput };
