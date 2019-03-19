import { Round } from "../vos/round.vo";

export function calculateRating(rounds: Round[], asOfDate?: Date) {
    // Sort by date?
    // Number of rounds and date stuff
    // Calculate if round gets dropped
    let numDoubleRatedRounds = Math.round(rounds.length / 4);
    let doubleRatedRounds = rounds.slice(0,numDoubleRatedRounds);
    let allRounds = [...rounds, ...doubleRatedRounds];

    let calculatedRating = allRounds.reduce((sum, next) => {
        return sum + next.roundRating;
    },0) / allRounds.length;

    console.log(calculatedRating);
}