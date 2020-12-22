import React from "react";

export const PhoneNumber = () => {
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
        PhoneNumber:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        PhoneNumber:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        PhoneNumber:
        <input type="text" />
      </label>

      <label style={formcolumn}>
        PhoneNumber:
        <input type="text" />
      </label>

      <input type="submit" value="Submit" />
    </>
  );
};
