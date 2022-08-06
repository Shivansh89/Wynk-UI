import React, { useState } from "react";
import { Drawer, Button, Space, Radio } from "antd";
import "../styles/Drawer.css";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const DrawerBox = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space className="Drawer-Box">
        <Button onClick={showDrawer}>
          <MenuIcon />
        </Button>
      </Space>
      <Drawer
        title=""
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer-main">
          <div className="Drawer-headings">
            <h1>Home</h1>
            <h1>Podcasts</h1>
            <h1>Download App</h1>
            <h1>Sign In</h1>
          </div>
          <div className="Social-icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerBox;
