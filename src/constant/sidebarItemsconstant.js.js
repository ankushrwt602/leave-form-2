import React from "react";
import {
  HomeOutlined,
  ApartmentOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

export const getItem = (label, key, icon, children, type ,url) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    url
  };
};

export const employeItems = [
  getItem("Dashboard", "1", <HomeOutlined /> ,'','employee','/dashboard-employee'),
  getItem("Apply Leave", "2", <CarryOutOutlined /> ,'','employee','/main/apply-leave'),
  getItem("Leave History", "3", <ContainerOutlined />,'','employee', '/main/employee-leave-history'),
  getItem("Log Out", "4", <LogoutOutlined />,'','employee'),
];


export const adminItems = [
    getItem("Dashboard", "1", <HomeOutlined />,'' ,'admin', '/dashboard-admin'),
    getItem("Employee Section", "2", <ApartmentOutlined /> ,'','admin','/main/admin-employee-section'),
    getItem("Leave Types", "3", <ContainerOutlined /> ,'' ,'admin', '/main/admin-leave-types'),
    getItem("Manage Leave", "4", <ContainerOutlined /> ,'' ,'admin','/main/admin-manage-leave'),
    getItem("Manage Admin", "5", <ContainerOutlined />, '', 'admin', '/main/manage-admin'),
    getItem("Manage Calendar", "6", <ContainerOutlined />, '', 'admin', '/main/manage-calendar'),
    getItem("Log Out", "7", <LogoutOutlined /> ,'' ,'admin'),
  ];