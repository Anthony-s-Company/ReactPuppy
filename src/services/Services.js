import axios from 'axios';

// API Endpoint
const COHORT = "2302-ACC-PT-WEB-PT-A";

// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/`;
const PLAYERS_APIURL = `${APIURL}/players`;

// get All Puppies
export const getPlayers = async () => {
  const resp = await axios.get(`${APIURL}`);
  return resp.data.results;
};

// get one Puppie by ID
export const getPlayer = async (id) => {
  const resp = await axios.get(`${PLAYERS_APIURL}/${id}`);
  return resp.data;
};
