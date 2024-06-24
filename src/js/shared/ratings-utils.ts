import { Round } from "../vos/round.vo";
import { debugLog, roundSort } from "./utils";

const yearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

export function sortRoundsByDate(rounds: Round[]) {
    return [...rounds]
    .map(round => ({
        ...round,
        roundRating: Number(round.roundRating)
    }))
    .filter(round => round.roundRating && !Number.isNaN(Number(round.roundRating)))
    .sort(roundSort);
}

export function getIncludedAndDroppedRounds(rounds: Round[]) {
    const roundsSortedByDate = sortRoundsByDate(rounds);

    const mostRecentRound = roundsSortedByDate[0];
    const roundsInLastTwoYears = roundsSortedByDate.filter(round => round.roundDate >= mostRecentRound.roundDate - (2 * yearInMilliseconds));
    const roundsInLastYear = roundsSortedByDate.filter(round => round.roundDate >= mostRecentRound.roundDate - yearInMilliseconds);

    const roundsIncludedInRating = roundsInLastYear.length >= 8 ? roundsInLastYear : roundsInLastTwoYears.slice(0, 8);

    return {
        included: roundsIncludedInRating,
        dropped: roundsSortedByDate.filter(round => !roundsIncludedInRating.includes(round))
    }
}

export function calculateRating(_rounds: Round[], asOfDate?: Date) {

    if (!_rounds.length) {
        return 0;
    }

    const {
        included: roundsIncludedInRating
    } = getIncludedAndDroppedRounds(_rounds);

    debugLog('Calculating ratings from ', roundsIncludedInRating.map(round => ({
        ...round,
        roundDate: new Date(round.roundDate)
    })), ' as of ', asOfDate)
    // Sort by date
    // Number of rounds and date stuff
    // Calculate if round gets dropped
    const numDoubleRatedRounds = roundsIncludedInRating.length >= 9 ? Math.round(roundsIncludedInRating.length / 4) : 0;
    const doubleRatedRounds = roundsIncludedInRating.slice(0,numDoubleRatedRounds);
    
    const allRounds = [...roundsIncludedInRating, ...doubleRatedRounds];

    const calculatedRating = allRounds.reduce((sum, next) => {
        return sum + Number(next.roundRating);
    },0) / allRounds.length;

    return Math.round(calculatedRating);
}
