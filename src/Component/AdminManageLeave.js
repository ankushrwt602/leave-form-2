import React from "react";
import { useState } from 'react';
import {Modal } from 'antd';
import Layout from "../Component/layoutComponent";
import {CheckCircleOutlined , CloseCircleOutlined} from "@ant-design/icons";
import { Button, Form, Select } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const AdminManagerLeave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formRef = React.useRef(null);
  const onmanageleaveChange = (value) => {
    // switch (value) {
    //   case 'male':
    //     formRef.current?.setFieldsValue({
    //       note: 'Hi, man!',
    //     });
    //     break;
    //   case 'female':
    //     formRef.current?.setFieldsValue({
    //       note: 'Hi, lady!',
    //     });
    //     break;
    //   case 'other':
    //     formRef.current?.setFieldsValue({
    //       note: 'Hi there!',
    //     });
    //     break;
    //   default:
    //     break;
    // }
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Layout />
      <section className="manage_leave_admin">
        <div className="container">
          <div className="admin-l-manage">
            <h2>Manage Leaves</h2>
          </div>
          <Form
            {...layout}
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Item
                  name="adminleave"
                  label="Select Leave"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a leave option"
                    onChange={onmanageleaveChange}
                    allowClear
                  >
                    <Option value="pen">Pending Leave</Option>
                    <Option value="app">Approved Leave</Option>
                    <Option value="dec">Declined</Option>
                    <Option value="his">Leave History</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form.Item {...tailLayout}>
                  <Button className="admin-m-l" htmlType="submit">Submit</Button>
                </Form.Item>
              </div>
            </div>
          </Form>
          <div className="manage_leave_type_table">
            <table>
              <tr>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Leave Status</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
              <tr>
                
                <td>Alfreds Futterkiste</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>
                    View details
                  </button>
                </td>
                <td><button className="check-circle-btn" ><CheckCircleOutlined /></button> <button  className="close-circle-btn"><CloseCircleOutlined /></button></td>
                <Modal
                  title="Alfreds Futterkiste"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Employee ID - 001</p>
                  <p>Department - Web Developer</p>
                  <p>Leave Type - Medical Leave</p>
                  <p>Condition - Fever</p>
                  <p>From - 23 Aug 2023</p>
                  <p>To - 25 Aug 2023</p>
                  <p>Applied - 20 Aug 2023</p>
                  <p>Leave Status - Pending</p>
                </Modal>
              </tr>
              <tr>
                <td>Centro Moctezuma</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>View details</button>
                </td>
                <td><button className="check-circle-btn" ><CheckCircleOutlined /></button> <button  className="close-circle-btn"><CloseCircleOutlined /></button></td>
              </tr>
              <tr>
                
                <td>Ernst Handel</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>View details</button>
                </td>
                <td><button className="check-circle-btn"><CheckCircleOutlined /></button> <button  className="close-circle-btn"><CloseCircleOutlined /></button></td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>View details</button>
                </td>
                <td><button className="check-circle-btn" ><CheckCircleOutlined /></button> <button  className="close-circle-btn"><CloseCircleOutlined /></button></td>
              </tr>
              <tr>
                <td>Laughing Winecellars</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>View details</button>
                </td>
                <td><button className="check-circle-btn"><CheckCircleOutlined /></button> 
                <button className="close-circle-btn"><CloseCircleOutlined /></button></td>
              </tr>
              <tr>
                <td>Magazzini Riuniti</td>
                <td>Medical Leave</td>
                <td>23 Aug 2023</td>
                <td>25 Aug 2023</td>
                <td>Pending</td>
                <td>
                  <button type="primary" className="modal-btn" onClick={showModal}>View details</button>
                </td>
                <td><button className="check-circle-btn"><CheckCircleOutlined /></button> 
                <button className="close-circle-btn"><CloseCircleOutlined /></button></td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminManagerLeave;