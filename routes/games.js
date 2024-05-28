const gamesRouter = require('express').Router();
const {checkAuth} = require('../middlewares/auth');
const {findAllGames,
  createGame,
  findGameById,
  checkEmptyFields,
  deleteGame,
  updateGame,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest
} = require('../middlewares/games');

const {sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameDeleted,
  sendGameUpdated
} = require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames,checkEmptyFields,checkIfCategoriesAvaliable,checkIsGameExists, createGame, sendGameCreated);
gamesRouter.put(
    "/games/:id", 
      findGameById,
      checkIsVoteRequest, 
      checkIfUsersAreSafe,
      checkIfCategoriesAvaliable,
     
      updateGame, 
      sendGameUpdated 
  );


gamesRouter.delete(
    "/games/:id", 
    checkAuth,
    deleteGame,
    sendGameDeleted 
  );
module.exports = gamesRouter;