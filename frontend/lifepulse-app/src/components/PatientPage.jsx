import axios from "axios";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const PatientPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userId: sessionStorage.getItem("userId"),
        Fullname: "",
        Dateofbirth: "",
        Gender: "",
        bloodType: "",
        Phone: "",
        Address: "",
        Email: "",
        RequiredOrgan:"",
        Emergencycontact: "",
        Emergencyrelationship: "",
        Medicalcondition: "",
        CurrentMedications: "",
        Allergies: "",
        PreviousHistory: ""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("http://localhost:3001/api/patients/register", formData);
          console.log(response.data);
          alert("successfully Registered")
          // Reset the form after successful submission
          setFormData({
            Fullname: "",
            Dateofbirth: "",
            Gender: "",
            bloodType: "",
            Phone: "",
            Address: "",
            Email: "",
            RequiredOrgan:"",
            Emergencycontact: "",
            Emergencyrelationship: "",
            Medicalcondition: "",
            CurrentMedications: "",
            Allergies: "",
            PreviousHistory: ""
          });
        } catch (error) {
          alert("Error submitting donor form")
          // console.error("Error submitting donor form:", error);
        }
      };

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const handleNavigate = () => {
    navigate("/viewpatient"); 
  };

  return (
    <div>
        <style>
        {`
          #viewport {
          display: flex;
          }
          #sidebar {
          width: 250px;
          height: 100vh;
          background-color: black;
          transition: transform 0.3s ease-in-out;
          transform: translateX(${isSidebarOpen ? "0" : "-100%"});
          }
          #sidebar header {
          background-color: #263238;
          color: #fff;
          font-size: 30px;
          font-family: Georgia, serif;
          font-weight: bold;
          line-height: 52px;
          text-align: center;
          background-color: blue;
          margin-bottom: 10px;
          }
          #sidebar header a {
          color: #fff;
          text-decoration: none;
          }
          #sidebar .nav {
          list-style: none;
          padding: 0;
          margin: 0;
          }
          #sidebar .nav li {
          padding: 10px 20px;
          margin-bottom: 35px;
          }
          #sidebar .nav li a {
          color: #CFD8DC;
          text-decoration: none;
          }
          #sidebar .nav li a:hover {
          background-color: #455A64;
          color: #ECEFF1;
          }
          #content {
          flex: 1;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: ${isSidebarOpen ? "250px" : "0"};
          transition: margin-left 0.3s ease-in-out;
          }
          .toggle-btn {
          position: fixed;
          top: 1px;
          left: ${isSidebarOpen ? "calc(250px + 20px)" : "10px"};
          background-color: #263238;
          color: #fff;
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 999;
          }
          .logout-btn {
          color: #CFD8DC;
          text-align: center;
          padding: 30px;
          cursor: pointer;
          }
          .welcome-message {
          color: #CFD8DC;
          text-align: right;
          padding: 10px;
          }
          @media (max-width: 768px) {
          #sidebar {
          width: ${isSidebarOpen ? "250px" : "0"};
          transform: none;
          }
          #content {
          margin-left: 0;
          }
          .toggle-btn {
          left: ${isSidebarOpen ? "calc(250px + 20px)" : "10px"};
          }
          }
          .form-control {
            border: 2px solid #3498db; /* Set border width and color */
            border-radius: 5px; /* Add border radius for rounded corners */
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; /* Add transition effect */
          }
          .form-label {
            margin-bottom: 15px; /* Adjust the value to increase or decrease space */
          }
          `}
      </style>
      <div id="viewport">
      <div id="sidebar">
          <header>
            <Link to="/nav">LifePulse</Link>
          </header>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link
                class="nav-link active no-underline"
                aria-current="page"
                to="/donreg"
              >
                DONOR REGISTRATION
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/patreg">
              PATIENT REGISTRATION
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/search">
                SEARCH
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/match">
                MATCH
              </Link>
            </li>
          </ul>
          <div className="logout-btn" onClick={handleLogout}>
            <i className="zmdi zmdi-power"></i> Logout
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>Register Patient</h1>
              <br />
            <form onSubmit={handleSubmit}> 
              <div className="row container border border-primary g-3">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label" >
                    Full Name
                  </label>
                  <input type="text" className="form-control"  name="Fullname" value={formData.Fullname} onChange={handleChange}  required/>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <label htmlFor="" className="form-label">
                    Date Of Birth
                  </label>
                  <input type="date" className="form-control"  name="Dateofbirth" value={formData.Dateofbirth} onChange={handleChange} required/>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <div>
                    <label htmlFor="" className="form-label">
                      Gender
                    </label>
                  </div>
                  <div style={{ border: '2px solid #3498db', borderRadius: '5px' }}>
                    <select className="form-select form-select-md "  name="Gender" value={formData.Gender} onChange={handleChange}   required>
                      <option value="">Select</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2 col-md-2 col-lg-2" >
                  <label htmlFor="" className="form-label">
                    Blood group
                  </label>
                  <select className="form-select form-select-md "  style={{ border: '2px solid #3498db', borderRadius: '5px' }}  name="bloodType" value={formData.bloodType} onChange={handleChange}   required>
                    <option value="">Select</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <label htmlFor="" className="form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control"   name="Phone" value={formData.Phone} onChange={handleChange}   required/>
                </div>
                

                <div className=" col-md-4 col-lg-4 ">
                  <label htmlFor="" className="form-label">
                    Address
                  </label>
                  <input type="text" name="Address" className="form-control" value={formData.Address} onChange={handleChange}  required/>
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="text" name="Email" className="form-control" value={formData.Email} onChange={handleChange}   required/>
                </div>
                <div className="col-md-4 col-lg-4">
                  <label htmlFor="" className="form-label">
                    Requirement
                  </label>
                  <input type="text" name="RequiredOrgan" className="form-control" value={formData.RequiredOrgan} onChange={handleChange}   required/>
                </div>
                
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                    Emergency Contact
                  </label>
                  <input type="text" className="form-control" name="Emergencycontact" value={formData.Emergencycontact} onChange={handleChange}  required/>
                </div>
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                    Relationship
                  </label>
                  <input type="text" className="form-control" name="Emergencyrelationship" value={formData.Emergencyrelationship} onChange={handleChange}  required/>
                </div>
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                    Medical Condition
                  </label>
                  <input type="text" className="form-control" name="Medicalcondition" value={formData.Medicalcondition} onChange={handleChange}  required/>
                </div>
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                    Current Medications
                  </label>
                  <input type="text" className="form-control" name="CurrentMedications" value={formData.CurrentMedications} onChange={handleChange}  required/>
                </div>
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                  Allergies
                  </label>
                  <input type="text" className="form-control" name="Allergies" value={formData.Allergies} onChange={handleChange}  required/>
                </div>
                <div className="col-md-3 col-lg-3">
                  <label htmlFor="" className="form-label">
                    Previous History
                  </label>
                  <input type="text" className="form-control" name="PreviousHistory" value={formData.PreviousHistory} onChange={handleChange} required />
                </div>
                <div className=" col-sm-3 col-md-3 col-lg-3" style={{  marginTop: '5%' }}>
                  <button className="btn btn-info"  >Register</button>
               
                  <br />
                  <br />
                </div>
              </div>
            </form> <br />
            <div  className="text-center"><button type="button" class="btn btn-primary btn-lg btn-block" onClick={handleNavigate}><b>View Patients</b></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientPage