import React, { useState } from 'react'
import axios from 'axios'
const DonorSearch = () => {
    const [input,setInput] = useState({
        userId: sessionStorage.getItem("userId"),
        fullname:""
    })
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const [out,setOutput] =  useState([]) 
    const readValues=()=>{
        if (!input.fullname) {
            // If Fullname is empty, clear the output array
            setOutput([]);
            return;
        }
        axios.post("http://localhost:3001/api/donor/search",input).then(
            (response)=>{
                setOutput(response.data)
                if (response.data.length === 0) {
                    // Display alert if no donor is found
                    alert("Donor not found");
                    setInput(
                        {
                            fullname:""
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
                                    <label htmlFor="" className="form-label">Search Donor</label>
                                    <input type="text" className="form-control" name="fullname" value={input.fullname} onChange={inputHandler} />
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
                    <th scope="col">Organs donating</th>
                    <th scope="col">Organ Record</th>
                    <th scope="col">Medical History</th>
                    <th scope="col">Infecious Disease</th>
                    <th scope="col">Lifestyle Factors</th>
                </tr>
              </thead>
              <tbody>
               
               {
                out.map(
                    (value,index)=>{
                        return  <tr>
                        <td>{value.fullname}</td>
                        <td>{value.dateofbirth}</td>
                        <td>{value.gender}</td>
                        <td>{value.bloodtype}</td>
                        <td>{value.phone}</td>
                        <td>{value.specificOrgansToDonate.join(', ')}</td>
                        <td>{value.organspecifichealthrecord}</td>
                        <td>{value.medicalhistory}</td>
                        <td>{value.infeciousdiseasestatus}</td>
                        <td>{value.lifestylefactors}</td>
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

export default DonorSearch