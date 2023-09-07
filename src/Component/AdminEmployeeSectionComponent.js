import Layout from "../Component/layoutComponent";
import React from "react";
import { useState } from "react";
import { Modal } from "antd";

const AdminEmployeeSection = () => {
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
      <section className="admin-employee-section">
        <div className="container">
          <div className="inner-admin-employee-frame">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="employee-sec-heading">
                  <h2>Employee Section</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="add-employye-btn">
                  <a href="/main/add-employee">Add New Employee</a>
                </div>
              </div>
            </div>
            <div className="admin-employee-table">
              <table>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Joined Date</th>
                  <th>Current Status</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Alfreds Futterkiste</td>
                  <td>Web Developer</td>
                  <td>23 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                    <Modal
                    title="Alfreds Futterkiste"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Email - alfreds@imagitrue.com</p>
                    <p>Gender - Male</p>
                    <p>Department - Web Developer</p>
                    <p>D.O.B - 12 June 1999</p>
                    <p>Contact Number - +91-7894-456-456</p>
                    <p>City - Dehradun</p>
                    <p>State - Uttarakhand</p>
                    <p>Address - Jakhan, Dehradun U.k</p>
                    <p>Joining Date - 23 August 2023</p>
                    <p>Current Status - Active</p>
                    <p>Username - alfreds</p>
                    <p>Password - 123@Password</p>
                  </Modal>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Web Developer</td>
                  <td>24 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Ernst Handel</td>
                  <td>Web Developer</td>
                  <td>25 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>004</td>
                  <td>Island Trading</td>
                  <td>Web Developer</td>
                  <td>26 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Web Developer</td>
                  <td>26 Aug 2023</td>
                  <td>Active</td>
                  <td>
                    <button type="primary" onClick={showModal}>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Web Developer</td>
                  <td>27 Aug 2023</td>
                  <td>Active</td>
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

export default AdminEmployeeSection;