import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { AppHeader } from "./components/common/AppHeader";
import { Home } from "./components/Home";
import { Login } from "./components/home/Login";

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
