import { Button, Form, InputGroup } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Content";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Write from "./Write";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="contents">
        <div className="contents_list">
          <div className="list_top">
            <InputGroup className="mb-3" style={{ width: "80%" }}>
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </div>
          <Content />
        </div>
        <div className="login">
          <SignUp />
        </div>
        {/*아이디 패스워드 이름 프로필사진 */}
      </div>
    </div>
  );
}

export default App;
