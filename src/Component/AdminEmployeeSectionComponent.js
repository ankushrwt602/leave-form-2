import Layout from "../Component/layoutComponent";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "antd";

const AdminEmployeeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [employeeInformation, setEmployeeInformation] = useState([]);

  const showModal = (employeeData) => {
    setEmployeeInformation(employeeData);
   console.log(employeeData,"employeeData>>>>>>>>>>>>>>>>")
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
  axios
  .get("http://localhost:5000/api/get/all/employee")
  .then((response)=>{
    const employeeData = response.data.data;
    setEmployee(employeeData);
  }
  )
  .catch(error => console.log(error));
  },[])

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
                  <th>ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Joined Date</th>
                  <th>Current Status</th>
                  <th>Details</th>
                </tr>

                {employee.map((tableData) => (
                    <tr key={tableData.id}>
                      <td>{tableData.id}</td>
                      <td>{tableData.name}</td>
                      <td>{tableData.department}</td>
                      <td>{tableData.joinedDate}</td>
                      <td>{tableData.status}</td>
                      <td>
                        <button type="primary"  onClick={() => showModal(tableData)}>
                          View details
                        </button>
                      </td>
                    </tr>
                ))}
              </table>
            </div>
          </div>
          <Modal
                    title={employeeInformation.name}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Email - </p>
                    <p>Gender - Male</p>
                    <p>Department - Web Developer</p>
                    <p>D.O.B - 12 June 1999</p>
                    <p>Contact Number - {employeeInformation.mobile_no}</p>
                    <p>City - Dehradun</p>
                    <p>State - Uttarakhand</p>
                    <p>Address - {employeeInformation.adress}</p>
                    <p>Joining Date - 23 August 2023</p>
                    <p>Current Status - Active</p>
                    <p>Username - {employeeInformation.username}</p>
                    <p>Password - 123@Password</p>
                  </Modal>
        </div>
      </section>
    </>
  );
};

export default AdminEmployeeSection;
