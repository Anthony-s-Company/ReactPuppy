/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCol,
  MDBRow
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


export default function Form() {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(false);

  function resetForm() {
    setUsername("");
    setPassword("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // const newUser = {
    //   username,
    //   password
    // };

    // if(username.length > 0 && password.length > 8){
    //   try {
    //     const response = await fetch(SIGN_UP_URL,
    //       {
    //           method: 'POST',
    //           body: JSON.stringify(newUser),
    //           headers: {
    //               'Content-Type': 'application/json',
    //           },
    //       });
  
    //   const result = await response.json();
    //   setToken(result.token);
    //   setIsSigned(true);
    //   setMsg(result.message);
    //   resetForm();
  
    //   } catch (error) {
    //     setError(error.message);
    //   }
    // }else{
    //   setError("Password Require at least 8 Characters")
    //   setIsSigned(true);
    // }
  }

  return (
    <>
    <form method="post" onSubmit={handleSubmit}>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Add a New Player</h2>
            {/* <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' 
                      value={username} 
                      onChange={(e) => {setUsername(e.target.value);}}
            />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'
                      value={password}
                      onChange={(e) => {setPassword(e.target.value);}}
            /> */}
            <MDBRow className='mb-4'>
              <MDBCol>
                <MDBBtn className='mb-4 w-100 gradient-custom-4' color='success' size='lg'
                        type="submit"> Register
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn className='mb-4 w-100 btn btn-warning-4' color='warning' size='lg'
                        type="reset" onClick={resetForm}>Reset
                </MDBBtn>
              </MDBCol>

            </MDBRow>
            <MDBRow className='mb-8'>
              <MDBCol>
              <Link to={`/`}>
                <MDBContainer>
                  <MDBBtn className='mb-4 w-100 btn btn-warning-4' size='lg'>
                    HOME
                  </MDBBtn>
                </MDBContainer>
              </Link>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
    </>
  );
}