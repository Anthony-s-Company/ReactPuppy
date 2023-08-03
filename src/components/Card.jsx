import {  
  MDBCol,  
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn  } from 'mdb-react-ui-kit';
import { useNavigate, Link } from "react-router-dom";
import Details from '../views/Details'


export default function Card({name, breed, status, url, id}) {

const navigate = useNavigate();

return (
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage
        src={url}
        alt='...'
        position='top'
      />
      <MDBCardBody className='cardBodyColor'>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          {breed}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn className='me-1' color='success' onClick={() => <Details />}>
          Details
        </MDBBtn>
        <MDBBtn className='me-1' color='warning'>
          Delete
        </MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  </MDBCol>
);

}