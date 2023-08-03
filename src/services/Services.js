// API Endpoint
const cohortName = "2302-ACC-PT-WEB-PT-A";

// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const PLAYERS_APIURL = `${APIURL}/players`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL + "players");
    const players = await response.json();
    const playersList = players.data.players;
    return playersList;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
      const response = await fetch(`${PLAYERS_APIURL}/${playerId}`);
      const singlePlayerData = await response.json();
      const player = singlePlayerData.data.player;
      console.log(player);
      return player;
  } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

export const addNewPlayer = async (playerPayload) => {
  try {
      const response = await fetch(PLAYERS_APIURL,
          {
              method: 'POST',
              body: JSON.stringify(playerPayload),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

      const responseData = await response.json();
      return responseData;
  } catch (err) {
      console.error('Oops, something went wrong with adding that player!', err);
  }
};

export const removePlayer = async (playerId) => {
  try {
      const response = await fetch(`${PLAYERS_APIURL}/${playerId}`, {
          method: 'DELETE'
      });
      const deleteResponse = await response.json();
      return deleteResponse;
  } catch (err) {
      console.error(
          `Whoops, trouble removing player #${playerId} from the roster!`,
          err
      );
  }
};