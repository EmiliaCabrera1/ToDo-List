import React from "react";

const Fondo = ({ children }) => {
  return (
    <div className="fondo bg-no-repeat bg-cover h-svh max-w-full">
      {children}
    </div>
  );
};

export default Fondo;
