import React from "react";
import {
  HomeOutlined,
  ApartmentOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  AppstoreOutlined,
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
  getItem("Upcoming Leave", "2", <ApartmentOutlined />,'','employee','/main/employeeupcomingleavecalendar'),
  getItem("Apply Leave", "3", <CarryOutOutlined /> ,'','employee','/main/apply-leave'),
  getItem("Leave History", "4", <ContainerOutlined />,'','employee', '/main/employee-leave-history'),
  getItem("Log Out", "5", <LogoutOutlined />,'','employee'),
];


export const adminItems = [
    getItem("Dashboard", "1", <HomeOutlined />,'' ,'admin', '/dashboard-admin'),
    getItem("Employee Section", "2", <ApartmentOutlined /> ,'','admin','/main/admin-employee-section'),
    getItem("Leave Types", "3", <ContainerOutlined /> ,'' ,'admin', '/main/admin-leave-types'),
    getItem("Manage Leave", "4", <ContainerOutlined /> ,'' ,'admin','/main/admin-manage-leave'),
    getItem("Manage Admin", "5", <ContainerOutlined />, '', 'admin', '/main/manage-admin'),
    getItem("Log Out", "6", <LogoutOutlined /> ,'' ,'admin'),
  ];