import React from "react";
import "../styles/Sign_In.css";

import { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const Signin = () => {
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
        SIGN IN
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
                <div className="a1">Login/Sign Up </div>
                <div className="b1">
                  {" "}
                  a personalised experience, and access all your music
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
                  Send OTP
                </Button>
                <div className="b1">
                  {" "}
                  To create your account, install Wynk app
                </div>
                <div className="playstorebutton">
                  <img
                    className="playstorebutton"
                    src="https://wynk.in/_next/static/media/apple-store.fd317c9d.png?imwidth=256"
                    style={{ width: "150px", height: "50px" }}
                  />
                  <br />
                  <img
                    className="playstorebutton"
                    src="https://wynk.in/_next/static/media/play-store.28ce99c9.png?imwidth=256"
                    style={{ width: "150px", height: "50px" }}
                  />
                </div>
              </div>
            </span>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Signin;
