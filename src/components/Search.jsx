import {
  MDBRow, 
  MDBCol,
  MDBInputGroup,} from 'mdb-react-ui-kit';

export default function Search() {
return (
  <MDBRow>
    <MDBCol md='4'>
      <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
        <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
      </MDBInputGroup>
    </MDBCol>
  </MDBRow>
);

}
