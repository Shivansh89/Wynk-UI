import { Input, Space,Layout } from "antd";

import "../styles/Search.css";

import "antd/dist/antd.css";
import wynkLightLogo from "../logo-dark.svg";
import wynkDarkLogo from "../logo-light.svg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


import Drawer from "./Drawer";

const { Header } = Layout;

const { Search } = Input;



const onSearch = (value) => console.log(value);

const SearchBar = (props) => {
  return (
    <>
      <Layout>
        <Header
          className={`for-search ${
            props.theme === true ? "dark-theme-header" : "light-theme-header"
          }`}
        >
          <div className="logo ">
            <Drawer className="Drawer" />
            <img
              className="logo"
              src={props.theme === true ? wynkLightLogo : wynkDarkLogo}
              alt="logo"
            />
          </div>
          <Space direction="vertical">
            <Search
              addonBefore={<ArrowBackIosNewIcon style={{color:"white"}}/>}
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            style={{ width: 800 }}
            />
          </Space>
           
        </Header>
      </Layout>
    </>
  );
};
export default SearchBar;
