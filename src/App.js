import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./Component/MainComponent";
import LoginComponent from "./Component/LoginComponent";
import ApplyleaveComponent from "./Component/ApplyleaveComponent";
import DashboardComponent from "./Component/DashboardComponent";
import AdminDashboardComponent from "./Component/AdminDashboardComponent";
import AdminEmployeeSection from "./Component/AdminEmployeeSectionComponent";
import AddEmployee from "./Component/AddEmployee";
import AdminleaveTypes from "./Component/AdminLeaveTypes";
import AdminAddLeave from "./Component/AdminAddLeave";
import AdminManageLeave from "./Component/AdminManageLeave";
import ManageAdmin from "./Component/ManageAdmin";
import AddAdminManage from "./Component/AddAdminManage";
import EmployeeLeaveHistory from "./Component/EmployeeLeaveHistory";
// import AdminCalendarComponent from "./Component/AdminCalendarComponent";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/main" element={<MainComponent />} />
      <Route path="/" element={<LoginComponent />} />
      <Route path="/main/apply-leave" element={<ApplyleaveComponent/>} />
      <Route path="/dashboard-employee" element={<DashboardComponent/>}/>
      <Route path="/dashboard-admin" element={<AdminDashboardComponent/>}/>
      <Route path="/main/admin-employee-section" element={<AdminEmployeeSection/>}/>
      <Route path="/main/add-employee" element={<AddEmployee/>}/>
      <Route path="/main/admin-leave-types" element={<AdminleaveTypes/>}/>
      <Route path="/main/admin-add-new-leave" element={<AdminAddLeave/>}/>
      <Route path="/main/admin-manage-leave" element={<AdminManageLeave/>}/>
      <Route path="/main/manage-admin" element={<ManageAdmin/>}/>
      <Route path="/main/add-manage-admin" element={<AddAdminManage/>}/>
      <Route path="/main/employee-leave-history" element={<EmployeeLeaveHistory/>}/>
      {/* <Route path="/main/manage-calendar" element={<AdminCalendarComponent/>}/> */}
    </Routes>
  </Router>
  </>
  );
}

export default App;