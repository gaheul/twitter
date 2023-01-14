import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save } from "./slice";
import WriteModal from "./WriteModal";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const movePage = (param) => {
    console.log(param);
    dispatch(save(param));
    setShow(false); //모달 닫힘
    navigate("/write");
  };

  const moveHome = () => {
    navigate("/");
  };
  return (
    <Navbar bg="light" variant="light" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand onClick={moveHome}>twitter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={moveHome}>Home</Nav.Link>
          <Nav.Link href="#features">login</Nav.Link>
          <Nav.Link href="#pricing" onClick={handleShow}>
            write
          </Nav.Link>
        </Nav>
      </Container>
      <WriteModal show={show} handleClose={handleClose} movePage={movePage} />
    </Navbar>
  );
};

export default NavBar;
