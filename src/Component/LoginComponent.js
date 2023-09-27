import React, { useState } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Select, notification } from "antd";
import login_img from "../Assets/Images/login_img.gif";
import { useNavigate } from "react-router-dom";
import { LoginDropdown, urlAfterLogin } from "../constant/constant";
import axios from "axios";
const { Option } = Select;

const LoginComponent = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    let obj = {
      username: values.username,
      password: values.password,
      login_type: values.login_type,
    };

    axios
      .post("http://localhost:5000/api/users/login", obj)
      .then((response) => {
        if (response.data.status == 200) {
          const queryParams = new URLSearchParams({
            LoginType: values.login_type,
          }).toString();

          localStorage.setItem("LoginType", values.login_type);
          navigate(`${urlAfterLogin[values.login_type]}?${queryParams}`);
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
        notification.error({
          message: error.response.data.message,
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <section className="login_page">
        <div className="component">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="img">
                <img src={login_img} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="login_form">
                <h1>Welcome To Leave Portal</h1>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Select"
                    name="login_type"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Dropdown!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select"
                      //   onChanghe={andleChange}
                      // options={[
                      //   {
                      //     value: "employee",
                      //     label: "Employee",
                      //   },
                      //   {
                      //     value: "admin",
                      //     label: "Admin",
                      //   },
                      // ]}
                    >
                      {LoginDropdown.map((data, index) => (
                        <Option value={data.id}>{data.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <button type="primary" htmlType="submit">
                      Login
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginComponent;
