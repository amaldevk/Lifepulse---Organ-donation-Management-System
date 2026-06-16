import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const MatchResult = () => {
    const navigate=useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [patientName, setPatientName] = useState('');
    const [matchResult, setMatchResult] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const handleMatch = async () => {
    try {
        const response = await axios.post("http://localhost:3001/api/match/result", { patientName });
        setMatchResult(response.data);
    } catch (error) {
        console.error('Error fetching match result:', error);
        alert("Patient not found!")
    }
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
      `}
      </style>
      <div id="viewport">
      <div id="sidebar">
          <header>
            <a href="#">LifePulse</a>
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
            <div className="row g-3">
                <div className="col-md-6 col-lg-6">
                    <h1>Match Result</h1>
                    <br />
                </div> 
            </div>
            <div className="row g-3">
            <div className="col-md-4 col-lg-4">
                <label htmlFor="" className="form-label" >
                    Enter the Patient
                  </label>
                  <input type="text" className="form-control"  value={patientName} onChange={(e) => setPatientName(e.target.value)}  />
            </div>
            </div>
            <div style={{  marginTop: '1%' }}>
            <button className="btn btn-info" disabled={!patientName.trim()} onClick={handleMatch} >Match</button>
            </div><br />
            {matchResult ? (
                        <div>
                            
                            <p>Highest Score: {matchResult.highestScore}</p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Date of Birth</th>
                                        <th>Blood Type</th>
                                        <th>gender</th>
                                        <th>Contact</th>
                                        <th>Organs donating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchResult.bestDonor.length > 0 ? (
                                        matchResult.bestDonor.map((donor, index) => (
                                            <tr key={index}>
                                                <td>{donor.fullname}</td>
                                                <td>{donor.dateofbirth}</td>
                                                <td>{donor.bloodtype}</td>
                                                <td>{donor.gender}</td>
                                                <td>{donor.phone}</td>
                                                <td>{donor.specificOrgansToDonate.join(', ')}</td>
                                                
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3">No matched donors</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>Enter patient name and click Match button to search for donors.</p>
                    )}
        </div>
      </div>
    </div>
  )
}

export default MatchResult