import { Round } from "../vos/round.vo";

export function calculateRating(rounds: Round[], asOfDate?: Date) {
    if (!rounds.length) {
        return 0;
    }
    let sortedRounds = [...rounds].sort((a,b) => {
        if (a.roundDate === b.roundDate) {
            return a.roundNumber > b.roundNumber ? -1 : 1;
        } else {
            return a.roundDate > b.roundDate ? -1 : 1;
        }
    });
    // Sort by date?
    // Number of rounds and date stuff
    // Calculate if round gets dropped
    let numDoubleRatedRounds = Math.round(rounds.length / 4);
    let doubleRatedRounds = sortedRounds.slice(0,numDoubleRatedRounds);
    
    let allRounds = [...sortedRounds, ...doubleRatedRounds];

    let calculatedRating = allRounds.reduce((sum, next) => {
        return sum + next.roundRating;
    },0) / allRounds.length;

    return Math.round(calculatedRating);
}