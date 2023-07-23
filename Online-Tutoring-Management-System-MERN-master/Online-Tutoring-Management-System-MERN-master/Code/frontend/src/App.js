import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AddStudent from "./components/addStudent";
import StudentLogin from "./components/studentLogin";
import TeacherLogin from "./components/teacherLogin";
import StaffLogin from "./components/staffLogin";
import AdminLogin from "./components/adminLogin";
import UpdateStudntPassword from "./components/updateStudentPassword";
import AdminDashbord from "./components/adminDashboard";
import PaymentGatway from "./components/paymentGateway";
import LoginSelection from "./components/loginSelection";
import FeebackForm from "./components/feedbackForm";
import HomePage from "./components/homePage";
import AdminProfile from "./components/adminProfile";
import UpdateAdminProfile from "./components/updateAdminProfile";
import DeleteStudent from "./components/deleteStudent";
import Calander from './components/calender';
import AllFeedback from "./components/feedbacksAll";
import AllStudents from "./components/allStudents";
import ManageStudents from "./components/manageStudents";


function App() {
  return (
    <div>
    <Header/>
    
    
     <Routes>
      <Route path="login" element={<LoginSelection/>} />
      <Route path="logout" element={<HomePage/>} />
      <Route path="studentLogin" element={<StudentLogin/>} />
      <Route path="teacherLogin" element={<TeacherLogin/>} /> 
      <Route path="staffLogin" element={<StaffLogin/>} />
      <Route path="adminLogin" element={<AdminLogin/>} />  
      <Route path="adminDashboard" element={<AdminDashbord/>} />  
      <Route path="adminProfile" element={<AdminProfile/>} />
      <Route path="updateAdmin" element={<UpdateAdminProfile/>} />
      <Route path="allFeedbacks/addFeedback" element={<FeebackForm/>} />
      <Route path="allFeedbacks" element={<AllFeedback/>} />
      <Route path="allStudents" element={<AllStudents/>} />
      <Route path="manageStudents" element={<ManageStudents/>} />
      <Route path="deleteStudent" element={<DeleteStudent/>}/>
      <Route path="/" element={<HomePage/>} /> 
    </Routes> 

    </div>
  );
}

export default App;
