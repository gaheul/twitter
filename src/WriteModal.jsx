import React, { memo, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const WriteModal = ({ show, handleClose, movePage }) => {
  // const { show, handleClose, movePage } = props;
  const [write, setWrite] = useState("");
  const [img, setImg] = useState("");
  const [wrtieData, setWrtieData] = useState();

  const writeContent = (e) => {
    setWrite(e.target.value);
    console.log(write);
  };

  const writeImg = (e) => {
    setImg(e.target.value);
  };

  useEffect(() => {
    return; //화면을 종료할때 ->클린업함수
  }, []);

  // const arr = [1,2,3,4]
  // arr[0]
  // const arrTest = arr.filter((res) => {
  //   return res > 1
  // })

  // const obj = { test: arr, one: 1 };
  // obj.test;
  // const key = Object.keys(obj); //키값만(배열로)
  // const values = Object.values(obj)

  //const : 상수선언/값이 변하지않음 let : 값 변동 가능 var: 호이스팅()

  "abcd".replace("a", "가"); //문자열 바꾸기
  "abcd".replaceAll("a", "가");
  "abcd".substring(0); //문자열 잘라내기
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>글쓰기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용을 입력하세요</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={writeContent}
              value={write}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>이미지</Form.Label>
            <Form.Control
              type="text"
              onChange={writeImg}
              value={img}
              name="memMainImg"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            movePage({ test: write, img }); //img:img
            setWrite("");
            setImg("");
          }}
        >
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default memo(WriteModal);
