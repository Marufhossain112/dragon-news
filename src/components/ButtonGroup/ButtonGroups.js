import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
const googleProvider = new GoogleAuthProvider();
const ButtonGroups = () => {
  const { signIn } = useContext(AuthContext);
  const handleSignIn = () => {
    return signIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
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
