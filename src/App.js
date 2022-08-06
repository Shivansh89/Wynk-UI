import "./App.css";

import "antd/dist/antd.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Podcasts from "./components/Podcasts";


import { React, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/Search";


function App() {
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    if (theme === true) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }

  return (
    <>
    
    <div className={`${theme === true ? "dark-theme" : "light-theme"}`}>
    
      <Routes>
        <Route path="/" element={<>  <Navbar changeTheme={changeTheme} theme={theme} /> <Slider />  <Body /> <Footer theme={theme} /> </>}></Route>
        <Route path="/home" element={<>  <Navbar changeTheme={changeTheme} theme={theme} /> <Slider />  <Body /> <Footer theme={theme} /> </>}></Route>
        <Route path="/sign-in" element={<>  <Navbar changeTheme={changeTheme} theme={theme} /> <Slider />  <Body /> <Footer theme={theme} /> </>}></Route>
        <Route path="/download" element={<>  <Navbar changeTheme={changeTheme} theme={theme} /> <Slider />  <Body /> <Footer theme={theme} /> </>}></Route>
        <Route path="/podcasts" element={<>  <Navbar changeTheme={changeTheme} theme={theme} /> <Podcasts /> </>}></Route>
        <Route path="/search" element={<SearchBar theme={theme} />}></Route>

      </Routes>

    </div>
    
    </>
  );
}

export default App;
