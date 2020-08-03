import React from "react";
import { withRouter } from "react-router-dom";
import { getOut } from "../../controllers";
import "./logOut.css";

const LogOut = ({ history }) => {
  const closeSesion = () => {
    getOut();
    history.push("/");
  };

  return (
    <div>
      <button className="btn btnStyle mr-3" onClick={() => closeSesion()}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default withRouter(LogOut);
