import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import { userLog } from "../../controllers";
import LogOut from "../LogOut/LogOut";

import waiter from "../../imgs/waiter.svg";
import kitchen from "../../imgs/kitchen.svg";
import "./roles.css";

const Roles = ({history}) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const checkUser = () => {
      if (userLog()) {
        setUser(userLog());
      } else {
        history.push("/");
      }
    };

    checkUser();
  }, [history]);

  return (
    <div className="divRoles">
      <LogOut />
      <Container className="containerRoles">
        <Row>
          <Col className="mx d-block">
            <Link to="/roles/piso" data-testid="Mesero">
              <img src={waiter} className="mx-auto d-block" alt="Mesero" />
            </Link>
          </Col>
          <Col className="mx d-block">
            <Link to="/roles/cocina" data-testid="Cocinero">
              <img src={kitchen} className="mx-auto d-block" alt="Chef" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Roles);
