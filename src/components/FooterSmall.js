import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";
import footerData from "../Data/footer";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
let count = 1;
let items = [];
for (let item of footerData) {
  let i = 0;
  while (i < item.length) {
    items.push(
      getItem(item[i].title, `sub${count++}`, <MailOutlined />, [
        getItem(item[i].card_content),
      ])
    );

    i++;
  }
}

const rootSubmenuKeys = [];

let subs = 1;

while (subs <= count) {
  rootSubmenuKeys.push(`sub${subs}`);
  subs++;
}

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "100%",
        background: "inherit",
        color: "inherit",
      }}
      items={items}
    />
  );
};

export default () => <Sider />;
