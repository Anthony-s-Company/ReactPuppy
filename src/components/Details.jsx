import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { fetchSinglePlayer } from '../services/Services';

export default function Details() {
  const { id } = useParams()
  const [player, setPlayer] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getPlayer() {
      try {
        const response = await fetchSinglePlayer(id)
        setPlayer(response)
        setLoaded(true)
        console.log(player)
      } catch (error) {
        setError(error)
      }
    }
    setLoaded(false)
    getPlayer();

  }, []);

  return (
    <>
      {loaded && !error && (
        <MDBContainer className='containerDetail'>
          <MDBCard style={{ maxWidth: '1000px' }} className='cardDetail'>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage className="imgDetail" src={player.imageUrl} alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>{player.name}</MDBCardTitle>
                  <MDBCardText>
                    TEAM: {player.team.name}
                  </MDBCardText>
                  <MDBCardText>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          <Link to={`/`}>
            <MDBContainer>
              <MDBBtn size='lg'>
                HOME
              </MDBBtn>
            </MDBContainer>
          </Link>
        </MDBContainer>
      )
      }
    </>
  );
}