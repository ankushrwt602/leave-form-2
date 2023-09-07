import React, { useState } from "react";
import Layout from "../Component/layoutComponent";
import AdminProfile from "../Assets/Images/imagitrue-CEO.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';

function AdminDashboardComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginType = queryParams.get("LoginType");
  const [series, setSeries] = useState([70]);

  return (
    <>
      <Layout loginType={loginType}/>
      <section className="admin-chart">
        <div className="container">
          <div className="inner-admin-chart">
            <div className="admin_profile">
              <div className="admin-picture">
                <img src={AdminProfile} alt="" />
              </div>
              <div className="admin-description">
                <span>Hello, Welcome Back!</span>
                <h1>Ridhi Chhabra</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="admin-heading">
              <h2>Data Information</h2>
            </div>
            <div className="admin-data-info">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="custom-admin-box total-staff">
                    <div className="inner-info">
                      <h2>20</h2>
                      <span>Total Employees</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="custom-admin-box total-staff">
                    <div className="inner-info">
                      <h2>18</h2>
                      <span>Available Leaves Type</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="custom-admin-box total-staff">
                    <div className="inner-info">
                      <h2>8</h2>
                      <span>Approved Leaves</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faHourglassEnd} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="custom-admin-box total-staff">
                    <div className="inner-info">
                      <h2>5</h2>
                      <span>Pending Leaves</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faHourglass} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="custom-admin-box total-staff">
                    <div className="inner-info">
                      <h2>0</h2>
                      <span>Rejected Leaves</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faHourglass} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-heading">
              <h2>Lasted Leave Application</h2>
            </div>
            <div className="admin-lastest-leave-table">
              <table>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Leave Type</th>
                  <th>Applied Leave</th>
                  <th>Current Status</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>001</td>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>23 Aug 2023</td>
                  <td>Pending</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>24 Aug 2023</td>
                  <td>Approved</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>25 Aug 2023</td>
                  <td>Pending</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>004</td>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>26 Aug 2023</td>
                  <td>Approved</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>26 Aug 2023</td>
                  <td>Approved</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>27 Aug 2023</td>
                  <td>Pending</td>
                  <td>
                    <button>View details</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
    // ss
  );
}
export default AdminDashboardComponent;