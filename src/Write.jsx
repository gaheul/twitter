import React, { memo, useCallback, useMemo } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const Write = () => {
  const { data } = useSelector((state) => state);
  console.log(data);
  const style = useMemo(() => {
    return { border: "none" };
  }, []);

  const callBack = useCallback(() => {
    //함수를 최적화시키는 방법
  }, []);
  return (
    <>
      <NavBar />
      <div className="list_detail">
        <div className="detail_profile">
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" />
        </div>
        <div className="detail_con">
          <Card style={style}>
            <div className="detail_title">
              <h4> name</h4>
              <span>@mail</span>
            </div>
            <Card.Body>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Img
                variant="top"
                src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg"
              />
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "transparent" }}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
      {data.list.map((i) => {
        return (
          <div className="list_detail" key={i.id}>
            <div className="detail_profile">
              <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" />
            </div>
            <div className="detail_con">
              <Card style={{ border: "none" }}>
                <div className="detail_title">
                  <h4> name</h4>
                  <span>@mail</span>
                </div>
                <Card.Body>
                  <Card.Text>{i.test}</Card.Text>
                  <Card.Img variant="top" src={i.img} />
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "transparent" }}>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default memo(Write); //컴포넌트 최적화 ()
