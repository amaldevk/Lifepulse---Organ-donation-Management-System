
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const ViewDonor = () => {
    
  const navigate = useNavigate();
    const [input, setInput] = new useState(
        {
            userId: sessionStorage.getItem("userId")
        }
    )
    const [output, setOutput] = useState([]);

    const readValues=()=>{
        axios.post("http://localhost:3001/api/donor/view",input).then((response)=>{
            setOutput(response.data)

        })
    }
    useEffect(() => { readValues() }, [])
    const deletepost=(id)=>{
        let data={"_id":id}
        axios.post("http://localhost:3001/api/donor/delete",data).then((response)=>{
            if(response.data.status=="success"){
                alert("Successfully Deleted")
                readValues()
            }
            else{
                alert("Something went wrong!..")
            }
        })
    }
    

  
  const handleback = () => {
    navigate("/donreg"); // Replace "/another-page" with the actual path to the desired page
  };
  return (
    <div>
        <div ><br />
        <div className="d-flex justify-content-between align-items-center container">
            <h1 className="m-0"><b>Registered Donors</b></h1>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleback}>Back to Register</button>
        </div><br />

        
        
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            
                           <table  class="table table-dark table-striped table-hover ">
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
                                        <th scope="col">Delete</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    {
                                        output.map(
                                            (value,index)=>{
                                                return <tr class="table-info">
                                                    <th scope="row">{value.fullname}</th>
                                                    <td>{value.dateofbirth}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.bloodtype}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.specificOrgansToDonate.join(', ')}</td>
                                                    <td>{value.organspecifichealthrecord}</td>
                                                    <td>{value.medicalhistory}</td>
                                                    <td>{value.infeciousdiseasestatus}</td>
                                                    <td>{value.lifestylefactors}</td>
                                                    <td><button className="btn btn-danger" onClick={() => { deletepost(value._id) }} >Delete</button></td>
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
        </div>
        

    </div>
  )
}

export default ViewDonor