import React from "react";
import PropTypes from "prop-types";
// import { FormFeedback, FormGroup } from "bootstrap";

const InputField = (props) => {
  const { field, form, type, label, placeholder, disable, icon } = props;

  const { name } = field;

  const { errors, touched, values } = form;

  const showError = errors[name] && touched[name];
  return (
    <>
      <div className="sigIn__form__row">
        <div className="sigIn__form__row__icon">
          <i className={icon}></i>
        </div>
        <input
          id={name}
          name={name}
          {...field}
          type={type}
          placeholder={placeholder}
          icon={icon}
          invalid={values.toString()}
          
        />
      </div>
      {showError && <div className="errormessage"><i className="fa-solid fa-circle-exclamation"></i>{errors[name]}</div>}
    </>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  icon: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
  icon: ""
};

export default InputField;
