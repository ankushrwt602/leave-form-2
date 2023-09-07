import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Layout from "../Component/layoutComponent";
import EmployeeProfile from ".././Assets/Images/employee-profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';
import LayoutComponent from "../Component/layoutComponent";

function DashboardComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginType = queryParams.get("LoginType");
  const [series, setSeries] = useState([70]);

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Total Leave"],
  };

  return (
    <>
      <Layout loginType={loginType}/>
      <section className="pie-chart">
        <div className="container">
          <div className="inner-pie-chart">
            <div className="employee_profile">
              <div className="profile-picture">
                <img src={EmployeeProfile} alt="" />
              </div>
              <div className="profile-description">
                <span>Hello, Welcome Back!</span>
                <h1>Vaishali Dobhal</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="employee-heading">
              <h2>Data Information</h2>
            </div>
            <div className="employye-data-info">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="custom-employee-box total-staff">
                    <div className="inner-info">
                      <h2>20</h2>
                      <span>Total Employees</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="custom-employee-box total-staff">
                    <div className="inner-info">
                      <h2>2</h2>
                      <span>Approved Leaves</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="custom-employee-box total-staff">
                    <div className="inner-info">
                      <h2>1</h2>
                      <span>Pending Leaves</span>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faHourglassEnd} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="custom-employee-box total-staff">
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
            <div className="donutchart">
              <div className="appsetup">
                <div className="row">
                  <div className="chartset-up col-lg-5 col-md-6 col-sm-12">
                    <h2>Total Leaves</h2>
                    <div id="chart">
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="radialBar"
                        height={350}
                      />
                    </div>
                  </div>

                  <div className="chartset-up col-lg-5 col-md-6 col-sm-12">
                    <h2>Remaining Leaves</h2>
                    <div id="chart">
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="radialBar"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-heading">
              <h2>Lasted Leave Application</h2>
            </div>
            <div className="lastest-leave-table">
            <table>
              <tr>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Applied Leave</th>
                <th>HOD Status</th>
                <th>Reg. Status</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Approved</td>
                <td>Approved</td>
              </tr>
            </table>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DashboardComponent;