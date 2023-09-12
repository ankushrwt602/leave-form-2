import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Layout from "../Component/layoutComponent";
import EmployeeProfile from ".././Assets/Images/employee-profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function DashboardComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginType = queryParams.get("LoginType");
  const [series, setSeries] = useState([70]);

  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <>
      <Layout loginType={loginType} />

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
                      <FontAwesomeIcon icon={faSquareXmark} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="donutchart">
              <div className="appsetup">
                <div className="row">
                  <div className="chartset-up col-lg-6 col-md-6 col-sm-12">
                    <h2>Total Leaves</h2>
                    <div id="chart">
                      <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="pie"
                        width={380}
                      />
                    </div>
                  </div>

                  <div className="chartset-up col-lg-6 col-md-6 col-sm-12">
                    <h2>Remaining Leaves</h2>
                    <div id="chart">
                      <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="pie"
                        width={380}
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
                  <th>Leave Type</th>
                  <th>Condition</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Applied</th>
                  <th>Admin's Remark</th>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>fever</td>
                  <td>23 Aug 2023</td>
                  <td>25 Aug 2023</td>
                  <td>21 Aug 2023 2:00:12</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>fever</td>
                  <td>23 Aug 2023</td>
                  <td>25 Aug 2023</td>
                  <td>21 Aug 2023 2:00:12</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>fever</td>
                  <td>23 Aug 2023</td>
                  <td>25 Aug 2023</td>
                  <td>21 Aug 2023 2:00:12</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>fever</td>
                  <td>23 Aug 2023</td>
                  <td>25 Aug 2023</td>
                  <td>21 Aug 2023 2:00:12</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>fever</td>
                  <td>23 Aug 2023</td>
                  <td>25 Aug 2023</td>
                  <td>21 Aug 2023 2:00:12</td>
                  <td>Pending</td>
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
