import Layout from "../Component/layoutComponent";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";


function AddAdminManage() {
  return (
    <>
      <Layout />
      <section className="add_new_admin">
        <div className="container">
          <div className="add_new_admin_inner_frame">
            <div className="add_new_admin_heading">
              <h4>Please fill up the form in order to add new admin</h4>
            </div>
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item
                label="Full name"
                name={["user", "admin"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the full name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name={["user", "email"]}
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input the admin's Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Username"
                name={["user", "admin"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name={["user", "password"]}
                rules={[
                  {
                    type: "password",
                    required: true,
                    message: "Please input the employee's Username!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div className="add_employee_btn">
                <div className="buttons">
                  <Form.Item>
                    <Button className="marg-right">Add Admin</Button>
                  </Form.Item>
                  <Form.Item>
                    <Button className="cancel">Cancel</Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddAdminManage;