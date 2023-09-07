import React, { useState } from "react";
import Layout from "../Component/layoutComponent";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";

const ApplyleaveComponent = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Layout />
      <section className="apply_leave">
        <div className="container">
          <div className="inner_apply_form_frame">
            <Form
              className="leaveForm"
              labelCol={{
                span: 15,
              }}
              wrapperCol={{
                span: 35,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Form.Item
                    label="Full Name"
                    name={["user", "name"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Position"
                    name={["user", "position"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Position!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-calender">
                    <Form.Item
                      label="Leave Start"
                      name="leave_start"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Date Picker!",
                        },
                      ]}
                    >
                      <DatePicker />
                    </Form.Item>

                    <Form.Item
                      label="Leave End"
                      name="leave_end"
                      className="marg-left"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Date Picker!",
                        },
                      ]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="Leave Type"
                    name="leave_type"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Dropdown!",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="medical">
                        Medical Leave
                      </Select.Option>
                      <Select.Option value="paid">Paid Leave</Select.Option>
                      <Select.Option value="unpaid">Unpaid Leave</Select.Option>
                      <Select.Option value="maternailty">
                        Maternailty Leave
                      </Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Numbers of Leave"
                    name="input_number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Leave Number!",
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                </div>
              </div>
              <Form.Item
                label="Reason for leave"
                name={["user", "textarea"]}
                rules={[
                  {
                    required: true,
                    message: "Please input your Details of Leave!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div className="applybtn">
                <div className="buttons">
                  <Form.Item>
                    <Button className="marg-right">Submit</Button>
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
export default ApplyleaveComponent;
