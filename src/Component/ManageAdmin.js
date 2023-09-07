import Layout from "../Component/layoutComponent";
import React from "react";
import { useState } from "react";
import { Modal } from "antd";
import {Link} from 'react-router-dom';

const ManageAdmin = () => {
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
  return (
    <>
      <Layout />
      <section className="manage-admin">
        <div className="container">
          <div className="inner-admin-manage-frame">
            <div className="add-mange-admin-btn">
              <Link to="/main/add-manage-admin">Add New Admin</Link>
            </div>
            <div className="admin-mange-admin-table">
              <table>
                <tr>
                  <th>Admin Name</th>
                  <th>Admin Username</th>
                  <th>Email Id</th>
                  <th>Account Created On</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>Ridhi Chhabra</td>
                  <td>Admin</td>
                  <td>ridhi@imagitrue.com</td>
                  <td>23 Aug 2023</td>
                  <td>
                    <button type="primary" onClick={showModal}>
                      View details
                    </button>
                  </td>
                  <Modal
                    title="Ridhi Chhabra"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Admin Username - admin</p>
                    <p>Email ID - ridhi@imagitrue.com</p>
                    <p>Account Created - 23 Aug 2023</p>
                    <p>Password - 123@hello</p>
                  </Modal>
                </tr>
                <tr>
                  <td>Nimit Grovar</td>
                  <td>User</td>
                  <td>nimit@imagitrue.com</td>
                  <td>23 Aug 2023</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageAdmin;