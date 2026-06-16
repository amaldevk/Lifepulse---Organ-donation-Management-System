import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            hosemail:"",
            hospassword:""  
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = ()=>{
        
        axios.post("http://localhost:3001/api/user/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status === "invalid user") {
                    alert("invalid Email")
                    setInput(
                        {
                            hosemail:"",
                            hospassword:""
                        }
                    )
                } else if(response.data.status === "invalid password") {    
                    alert("invalid password")
                    setInput(
                        {
                            hosemail:"",
                            hospassword:""
                        }
                    )
                }
                else{
                  alert("Login success, WELCOME BACK!..")
                    sessionStorage.setItem("userId",response.data.userData._id)
                    //sessionStorage.setItem("username", response.data.userData.hosusername);
                    navigate("/nav")
                   
                }

            }
        )
    }
  
  return (
    <div >
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight text-primary" style={{ fontSize: '105px', textAlign: 'center' }}>
                LifePulse <br />
                <span className="text-dark" style={{ fontSize: '40px', display: 'block', marginTop: '2px', textAlign: 'center' }}>
                Every Beat Counts
                </span>
              </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card shadow" style={{ backgroundColor: '#F8F9FA' }}>
                  <div className="card-body py-5 px-md-5">
                    <div className="form-outline mb-4">
                      <p style={{ fontSize: '25px', textAlign: 'center' }} ><i><b>Sign in to your Account</b></i></p><br />
                      <label className="form-label" htmlFor="form3Example3">Email </label>
                      <input type="email" id="form3Example3" className="form-control" name="hosemail" value={input.hosemail} onChange={inputHandler}/>
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <input type="password" id="form3Example4" className="form-control" name="hospassword" value={input.hospassword} onChange={inputHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={readValues}>
                      Sign in
                    </button>
                    <p>Not a member? <Link to="/reg" style={{ fontSize: '20px' }}>Register here!</Link></p>
                  </div>
                  <div className="text-center mb-4">
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
