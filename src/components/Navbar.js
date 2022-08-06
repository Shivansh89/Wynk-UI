import "antd/dist/antd.css";
import { Layout, Space, Typography, Divider } from "antd";
import wynkLightLogo from "../logo-dark.svg";
import wynkDarkLogo from "../logo-light.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { SearchOutlined } from "@ant-design/icons";
import PersonIcon from "@mui/icons-material/Person";
import Drawer from "./Drawer";
import Sign_In from "./Sign_In";
import Download from "./Download";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const { Header } = Layout;

const Navbar = (props) => {
  return (
    <>
      <Layout>
        <Header
          className={`${
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

            <SearchOutlined className="searchLogo" />

            <NavLink to="/search"><a className="search-a" href="/">
              Search
            </a></NavLink>

          </div>

          <Space className="menu-links" split={<Divider type="vertical" />}>
            <NavLink to="/home">
              <Typography.Link>Home</Typography.Link>
            </NavLink>
            <NavLink to="/podcasts">
              <Typography.Link>Podcasts</Typography.Link>
            </NavLink>
            
              <Typography.Link><NavLink to="/download" ><Download /></NavLink></Typography.Link>
            
            <Typography.Link>
              {props.theme === true ? (
                <WbSunnyIcon
                  className="headerLinksPositioning"
                  onClick={props.changeTheme}
                />
              ) : (
                <DarkModeIcon
                  className="headerLinksPositioning"
                  onClick={props.changeTheme}
                />
              )}
            </Typography.Link>
            <Typography.Link>
              <TranslateIcon className="headerLinksPositioning" />
            </Typography.Link>
            <Typography.Link>
              <NavLink to='/sign-in'><Sign_In /></NavLink>
            </Typography.Link>
          </Space>

          <Space className="small-menu" split={<Divider type="vertical" />}>
            <div className="small-links">
              <SearchOutlined />

              <Typography.Link>
                {props.theme === true ? (
                  <WbSunnyIcon
                    className="headerLinksPositioning"
                    onClick={props.changeTheme}
                  />
                ) : (
                  <DarkModeIcon
                    className="headerLinksPositioning"
                    onClick={props.changeTheme}
                  />
                )}
              </Typography.Link>

              <NavLink to="/sign-in">
                <Typography.Link className="SignIn">SIGN IN</Typography.Link>
              </NavLink>
              <PersonIcon className="PersonIcon" />
            </div>
          </Space>
        </Header>
      </Layout>
    </>
  );
};
export default Navbar;
