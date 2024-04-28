import React from "react";

const Form = ({ children, ...rest }) => {
  return (
    <form {...rest} action="">
      {children}
    </form>
  );
};

export default Form;
