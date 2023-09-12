import Layout from "../Component/layoutComponent";
// import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
} from "antd";
// const { RangePicker } = DatePicker;
const { TextArea } = Input;

function AdminAddLeave () {
  
  return (
    <>
      <Layout />
      <section className="add_new_leave">
        <div className="container">
          <div className="add_new_leave_inner_frame">
               <div className="add_new_leave_heading">
                   <h2>Please fill up the form in order to add new leave type</h2>
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
              }}>
                
              <Form.Item
                label="Leave Type"
                name={["user", "leave"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the Leave Type!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Description"
                name={["user", "description"]}
                rules={[
                  {
                    required: true,
                    message: "Please input the Leave Description!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>

              <div className="add_employee_btn">
                <div className="buttons">
                  <Form.Item>
                    <Button className="marg-right">Add Leave</Button>
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
};
export default AdminAddLeave;