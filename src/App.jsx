import React, { useState } from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';

import "./App.css";
import Card from './components/Card';
import Search from './components/Search';

export default function App() {

  return (
    <>
      <MDBContainer className='containerColor'>
        <MDBContainer className='containerColor'>
          <h1>ALL PLAYERS</h1>
        </MDBContainer>
        <Search />
        <Card />
      </MDBContainer>
    </>
  );
}