import React from 'react'
import DonorSearch from './DonorSearch';
import { Link, useNavigate } from "react-router-dom";
import PatientSearch from './PatientSearch';
const SearchParent = () => {
    const navigate = useNavigate();
    const handleback = () => {
        navigate("/donreg"); // Replace "/another-page" with the actual path to the desired page
      };
  return (
    <div>
        <div><br />
        <div className="d-flex justify-content-between align-items-center container">
            <h2 className="m-0"><b>Search Donors</b></h2>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleback}>Back to Register</button>
        </div><br />
        <DonorSearch/>
        </div>
        <div><br />
            <div className="d-flex justify-content-between align-items-center container">
                <h2 className="m-0"><b>Search Patients</b></h2>
                {/* <button type="button" className="btn btn-primary btn-lg" onClick={handleback}>Back to Register</button> */}
            </div><br />
        <PatientSearch/>
        </div>
    </div>
  )
}

export default SearchParent