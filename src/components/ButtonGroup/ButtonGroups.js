import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const ButtonGroups = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> <small> Login via Google</small>
        </Button>{" "}
        <Button variant="outline-dark">
          <FaGithub /> <small>Login via Github</small>
        </Button>{" "}
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroups;
