import React from "react";

export const InputForm = () => {
  const formcolumn = {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    TextAlign: "center",
    alignItems: "center",
    margin: "10px"
  };

  return (
    <>
      <label style={formcolumn}>
        InputForm:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        InputForm:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        InputForm:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        InputForm:
        <input type="text" />
      </label>

      <input type="submit" value="Submit" />
    </>
  );
};
