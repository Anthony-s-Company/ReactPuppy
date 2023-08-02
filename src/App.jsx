import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol,  MDBCard,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter } from 'mdb-react-ui-kit';

import "./App.css";

export default function App() {

  return (
    <>

    <MDBContainer className='containerColor'>

      <MDBContainer className='containerColor'>
        <h1>ALL PLAYERS</h1>
      </MDBContainer>

      <MDBRow>
        <MDBCol md='4'>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
        </MDBInputGroup>
        </MDBCol>
      </MDBRow>

      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody className='cardBodyColor'>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}