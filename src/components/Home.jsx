import { useState, useEffect } from 'react';
import {MDBContainer, MDBRow, MDBBtn} from 'mdb-react-ui-kit';

import Card from '../components/Card'
import Search from '../components/Search'
import { Link } from "react-router-dom";

import { fetchAllPlayers } from '../services/Services';

export default function Home() {
  const [players, setPlayers] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetchAllPlayers()
        setPlayers(response)
        setLoaded(true)
      } catch (error) {
        setError(error)
      }
    }
    setLoaded(false)
    getPlayers();
    
  }, []);

  return (
    <>
      {loaded && !error && (
        <MDBContainer className='containerColor'>
          <h1>ALL PLAYERS</h1>
          <MDBContainer>
            <Search />
            <MDBContainer className='btnContainer'>
              <Link to={`/addPuppy`}>
                <MDBBtn size='lg' color='success'>
                  ADD
                </MDBBtn>
              </Link>
            </MDBContainer>
          </MDBContainer>
          <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
            {players.map((player) => <Card key={player.id} puppy={player}/>)}
          </MDBRow>
        </MDBContainer>
        )
      }
    </>
  );
}