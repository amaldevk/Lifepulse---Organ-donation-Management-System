import React, { useState } from 'react'
import axios from 'axios'
const PatientSearch = () => {
    const [input,setInput] = useState({
        userId: sessionStorage.getItem("userId"),
        Fullname:""
    })
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const [out,setOutput] =  useState([]) 
    const readValues=()=>{
        if (!input.Fullname) {
            // If Fullname is empty, clear the output array
            setOutput([]);
            return;
        }
        axios.post("http://localhost:3001/api/patients/search",input).then(
            (response)=>{
                setOutput(response.data)
                if (response.data.length === 0) {
                    // Display alert if no donor is found
                    alert("Patient not found");
                    setInput(
                        {
                            Fullname:""
                        }
                    )
                }
            }
        )
    } 
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <   div className="card">
  
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <label htmlFor="" className="form-label">Search Patient</label>
                                    <input type="text" className="form-control" name="Fullname" value={input.Fullname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValues}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
              <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Blood Type</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Medical Condition</th>
                    <th scope="col">Current Medications</th>
                    <th scope="col">Allergies</th>
                    <th scope="col">Previous History</th>
                           
                </tr>
              </thead>
              <tbody>
               
               {
                out.map(
                    (value,index)=>{
                        return  <tr>
                            <td>{value.Fullname}</td>
                            <td>{value.Dateofbirth}</td>
                            <td>{value.Gender}</td>
                            <td>{value.bloodType}</td>
                            <td>{value.Phone}</td>
                            <td>{value.Email}</td>
                            <td>{value.Medicalcondition}</td>
                            <td>{value.CurrentMedications}</td>
                            <td>{value.Allergies}</td>
                            <td>{value.PreviousHistory}</td>
                      </tr>
                    }
                )
               }
              </tbody>
            </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientSearch