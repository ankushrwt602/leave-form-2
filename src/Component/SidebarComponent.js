import React, { useEffect, useState } from "react";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { employeItems, adminItems } from "../constant/sidebarItemsconstant.js";
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;

const SidebarComponent = (props) => {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [loginType, setLoginType] = useState(props.loginType);
  const [isEffectRun, setIsEffectRun] = useState(false); // Track if the effect has run


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  // useEffect(() => {
  //   if(!isEffectRun){
  //     setIsEffectRun(true);
  //     console.log("hemant>>>>>>>.")
  //   if (props.loginType == 2 || localStorage.getItem("LoginType") ==2 
  //   ) {
  //     handleMenuItemClick("/main/dashboard-employee");
  //   }
  //   if (props.logintype == 1 || localStorage.getItem("LoginType")==1) {
  //     handleMenuItemClick("/main/dashboard-admin"); 
  //   }
  //   }
  //   console.log (props.loginType, 'kanuu')
  // },[isEffectRun]);


  const handleMenuItemClick = (key) => {
    console.log("Clicked menu item with key:", key);
    navigate(key.url);
  };

  const renderMenuItems = (items) => {
    items = loginType == 1  ||  localStorage.getItem("LoginType")==1 ? adminItems : employeItems;
    return items.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          onClick={() => handleMenuItemClick(item)}
        >
          {item.label}
        </Menu.Item>
      );
    });
  };
  return (
    <section className="sidebar">
      <div className="inner-frame">
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          // defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {renderMenuItems(loginType == 1 || localStorage.getItem("LoginType")==1? adminItems : employeItems)}
        </Menu>
      </div>
    </section>
  );
};


const  MemoizedSidebarComponent = React.memo(SidebarComponent);
export default MemoizedSidebarComponent;