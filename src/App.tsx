import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { AppHeader } from "./components/common/AppHeader";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <AppHeader></AppHeader>
        </Header>
        <Content>
          <Home></Home>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
