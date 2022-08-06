import "../styles/Footer.css";
import footerData from "../Data/footer";
import { Card, Col, Row } from "antd";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Sider from "./FooterSmall"

const Footer = (props) => {
  return (
    <>
      <div
        className={`mainFooter dark-theme-header ${
          props.theme === true ? "dark-theme-header" : "light-theme-footer"
        }`}
      >
        <div className="footer-logo">
          <img src="https://wynk.in/_next/static/media/footerIcon.a4076dee.svg?imwidth=64" />
          <div className="Footer-main-message">
            <h2>Best way to Listen to Music!</h2>
            <h4>Don't forget to install Wynk Music on your mobile phones</h4>
          </div>
        </div>
        <div className="small-footer-button">
          <button>Get App</button>
        </div>

        <div className="download-icons">
          <img src="https://wynk.in/_next/static/media/play-store.28ce99c9.png?imwidth=384" />
          <img src="https://wynk.in/_next/static/media/apple-store.fd317c9d.png?imwidth=384" />
        </div>
      </div>
      <div className="site-card-wrapper">
        {footerData.map((item) => {
          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  title={item[0].title}
                  className="card-content"
                  bordered={false}
                >
                  <p>{item[0].card_content}</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title={item[1].title}
                  className="card-content"
                  bordered={false}
                >
                  <p>{item[0].card_content}</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title={item[2].title}
                  className="card-content"
                  bordered={false}
                >
                  <p>{item[0].card_content}</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title={item[3].title}
                  className="card-content"
                  bordered={false}
                >
                  <p>{item[0].card_content}</p>
                </Card>
              </Col>
            </Row>
          );
        })}
      </div>

<Sider className="small-footer"></Sider>

      <div className="footer-connect">
        <ul className="footer-links">
          <li>
            <a href="/">ABOUT US |</a>
          </li>
          <li>
            <a href="/"> ADVERTISE WITH US |</a>
          </li>
          <li>
            <a href="/"> PRIVACY POLICY |</a>
          </li>
          <li>
            <a href="/"> TERMS OF USE |</a>
          </li>
          <li>
            <a href="/"> CONTACT US |</a>
          </li>
          <li>
            <a href="/"> FEEDBACK |</a>
          </li>
          <li>
            <a href="/"> HELLOTUNES</a>
          </li>
        </ul>
        <div className="footer-social-icons">
          <FacebookOutlinedIcon className="footer-social-icons" />
          <InstagramIcon className="footer-social-icons" />
          <TwitterIcon className="footer-social-icons" />
        </div>
      </div>
      <div className="footer-info">
        <p>
          Wynk Music is the one-stop music app for the latest to the greatest
          songs that you love. Play your favourite music online for free or
          download mp3. Enjoy from over 60 Lakh Hindi, English, Bollywood,
          Regional, Latest, Old songs and more.
        </p>
        <p className="footer-info-text">
          2021 © All rights reserved | Airtel Digital Limited
        </p>
      </div>
    </>
  );
};

export default Footer;
