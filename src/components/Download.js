import React from "react";
import "../styles/Sign_In.css";

import { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const Download = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="text" onClick={showModal}>
        Download App
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        width="800px"
        className="login_container"
      >
        <>
          <div className="grid">
            <span className="login_image">
              <img
                className="login_image2"
                src="https://wynk.in/_next/static/media/login.344ba0e0.png"
              />
            </span>
            <span className="login_containerr">
              <div className="login_sub">
                <div className="a1">Take Wynk wherever you go </div>
                <div className="b1">
                  {" "}
                  Get a message to download the mobile app
                </div>
                <span>
                  {" "}
                  <input className="number1" value="+91" />
                  <input
                    className="c1 number2"
                    placeholder="Enter Mobile Number"
                    type="number"
                  />
                </span>

                <Button type="submit" className="d1 customRedButton">
                  {" "}
                  Get the link
                </Button>
              </div>
            </span>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Download;
