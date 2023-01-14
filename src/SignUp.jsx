import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { sweetAlert } from "./Util";

const SignUp = () => {
  const [signup, setSignup] = useState([
    {
      gbnNo: 1,
      memId: "test", //아이디
      memPwd: "1234", //비밀번호
      memNm: "test", //이름
      memTel: "010-1234-5678", //전화번호
      memMainImg: "", //프로필사진
    },
  ]);
  const [pwd, setPwd] = useState("");
  const [check, setCheck] = useState(false);

  const [temp, setTemp] = useState({
    gbnNo: 0,
    memId: "", //아이디
    memPwd: "", //비밀번호
    memChkPwd: "", //비밀번호 확인
    memNm: "", //이름
    memTel: "", //전화번호
    memMainImg: "", //프로필사진
    memJoinDt: "",
  });

  const changeSignUpInput = (e) => {
    const { value, name } = e.target;
    // setTemp(e.target.value);
    console.log(e.target.value);
    console.log(e.target.name);

    if (name === "memPwd") {
      //name이 memPwd 같다면
      if (pwd === value) {
        //재입력 value === input value 같다면
        setCheck(false);
      } else {
        setCheck(true); // !check(toggle)로 하면 값이 계속 바뀌기 때문에 false-true 정해줌
      }
    }
    setTemp((prev) => {
      return { ...prev, [name]: value };
    });
    //유효성체크 (sweet) / 비밀번호 유효성(문구) / 입력완료시 회원가입
  };

  const chagnePassword = (e) => {
    setPwd(e.target.value);
    if (temp.memPwd === e.target.value) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  const checkSignup = () => {
    if (!temp.memId) {
      Swal.fire("아이디를 입력해주세요", "", "error");
      return false;
    } else if (!temp.memPwd) {
      Swal.fire("비밀번호를 입력해주세요", "", "error");
      return false;
    } else if (!temp.memNm) {
      Swal.fire("이름을 입력해주세요.", "", "error");
    } else if (!temp.memTel) {
      Swal.fire("전화번호를 입력해주세요.", "", "error");
    } else {
      setSignup((prev) => [...prev, temp]);
      setTemp({
        gbnNo: 0,
        memId: "", //아이디
        memPwd: "", //비밀번호
        memChkPwd: "", //비밀번호 확인
        memNm: "", //이름
        memTel: "", //전화번호
        memMainImg: "", //프로필사진
        memJoinDt: "",
      });
    }
  };
  console.log(signup);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          onChange={changeSignUpInput}
          value={temp.memNm}
          name="memNm"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          onChange={changeSignUpInput}
          value={temp.memTel}
          name="memTel"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="text"
          onChange={changeSignUpInput}
          value={temp.memId}
          name="memId"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          onChange={changeSignUpInput}
          value={temp.memPwd}
          name="memPwd"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>비밀번호 재입력</Form.Label>
        <Form.Control
          type="password"
          onChange={chagnePassword}
          value={pwd}
          name="memCpwdhkPwd"
        />
        {check && <p>비밀번호가 일치하지 않습니다.</p>}
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>프로필 사진</Form.Label>
        <Form.Control
          type="text"
          onChange={changeSignUpInput}
          value={temp.memMainImg}
          name="memMainImg"
        />
      </Form.Group>
      <div style={{ padding: "0 150px", marginBottom: "10px" }}>
        <Button variant="outline-primary" onClick={checkSignup}>
          회원가입
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
