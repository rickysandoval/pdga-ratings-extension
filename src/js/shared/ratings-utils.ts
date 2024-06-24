import { Round } from "../vos/round.vo";
import { debugLog, roundSort } from "./utils";

export function calculateRating(rounds: Round[], asOfDate?: Date) {
    debugLog('Calculating ratings from ', rounds, ' as of ', asOfDate)
    if (!rounds.length) {
        return 0;
    }
    let sortedRounds = [...rounds].sort(roundSort);
    // Sort by date?
    // Number of rounds and date stuff
    // Calculate if round gets dropped
    let numDoubleRatedRounds = Math.round(rounds.length / 4);
    let doubleRatedRounds = sortedRounds.slice(0,numDoubleRatedRounds);
    
    let allRounds = [...sortedRounds, ...doubleRatedRounds];

    let calculatedRating = allRounds.reduce((sum, next) => {
        return sum + Number(next.roundRating);
    },0) / allRounds.length;

    return Math.round(calculatedRating);
}
