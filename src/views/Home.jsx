import { useState, useEffect } from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';

import Card from '../components/Card'
import Search from '../components/Search'


import { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer,} from '../services/Services';

// API Endpoint
const COHORT = "2302-ACC-PT-WEB-PT-A";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/`;
const PLAYERS_APIURL = `${APIURL}/players`;

export default function Home() {
  const [players, setPlayers] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetchAllPlayers()
        setPlayers(response);
        setLoaded(true)
        console.log(players)
      } catch (error) {
        console.error(error);
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
          <MDBContainer className='containerColor'>
            <h1>ALL PLAYERS</h1>
          </MDBContainer>
          <Search />
          <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
            {players.map((player) => <Card key={player.id} name={player.name} 
                                          breed={player.breed} status={player.status} 
                                          url={player.imageUrl} id={player.id}/>)}
          </MDBRow>
          
        </MDBContainer>
        )
      }
    </>
  );
}

{/* <GridExample key={puppy.id} puppy={puppy} /> */}