/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {  
  MDBCol,  
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn  } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { removePlayer } from '../services/Services';

export default function Card({puppy}) {

const [error, setError] = useState(false);
const [loaded, setLoaded] = useState(false);

// useEffect(() => {


// }, []);

 async function deletePuppy() {
    try {
      await removePlayer(puppy.id)
      setLoaded(true)
      location.reload()
    } catch (error) {
      setError(error)
    }
  }


return (
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage
        src={puppy.imageUrl}
        alt='...'
        position='top'
      />
      <MDBCardBody className='cardBodyColor'>
        <MDBCardTitle>{puppy.name}</MDBCardTitle>
        <MDBCardText>
          {puppy.breed}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <Link to={`/details/${puppy.id}`}>
          <MDBBtn className='me-1' color='success'>
            Details
          </MDBBtn>
        </Link>
        <Link to={`/`}>
          <MDBBtn className='me-1' color='warning' onClick={deletePuppy}>
            Delete
          </MDBBtn>
        </Link>
      </MDBCardFooter>
    </MDBCard>
  </MDBCol>
);

}