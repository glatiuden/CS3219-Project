import findMatch from "./find-match";
import cancelMatch from "./cancel-match";
import getMatch from "./get-match";
import findEloMatch from "./find-elo-match";

const matchUseCases = Object.freeze({
  findMatch,
  cancelMatch,
  getMatch,
  findEloMatch,
});

export default matchUseCases;

export { findMatch, cancelMatch, getMatch, findEloMatch };
