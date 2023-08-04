/* eslint-disable react/prop-types */
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

export default function Card({puppy}) {

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
        <MDBBtn className='me-1' color='warning' onClick={()=>{console.log('deleting and go home')}}>
          Delete
        </MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  </MDBCol>
);

}