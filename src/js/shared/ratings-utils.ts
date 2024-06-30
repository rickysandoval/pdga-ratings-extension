import { Round } from "../vos/round.vo";
import { debugLog, roundSort } from "./utils";

const dayInMilliseconds = 24 * 60 * 60 * 1000;
const yearInMilliseconds = 365 * dayInMilliseconds;

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
    const roundsInLastYear = roundsSortedByDate.filter(round => round.roundDate >= mostRecentRound.roundDate - yearInMilliseconds - dayInMilliseconds);

    const roundsIncludedInRating = roundsInLastYear.length >= 8 ? roundsInLastYear : roundsInLastTwoYears.slice(0, 8);

    return {
        included: roundsIncludedInRating,
        dropped: roundsSortedByDate.filter(round => !roundsIncludedInRating.includes(round))
    }
}

export function calculateRating(_rounds: Round[]) {

    if (!_rounds.length) {
        return 0;
    }

    const {
        included: roundsIncludedInRating
    } = getIncludedAndDroppedRounds(_rounds);

    debugLog('Calculating ratings from ', JSON.stringify(roundsIncludedInRating.map(round => ({
        ...round,
        roundDate: new Date(round.roundDate).getTime()
    }), null)))
    // Sort by date
    // Number of rounds and date stuff
    // Calculate if round gets dropped
    const numDoubleRatedRounds = roundsIncludedInRating.length >= 9 ? Math.ceil(roundsIncludedInRating.length / 4) : 0;
    const doubleRatedRounds = roundsIncludedInRating.slice(0,numDoubleRatedRounds);
    
    const allRounds = [...roundsIncludedInRating, ...doubleRatedRounds];

    const { sum, weights } = allRounds.reduce((soFar, next) => {
        const roundWeight = (next.holes || 18)/18;

        return {
            sum: soFar.sum + (next.roundRating * roundWeight),
            weights: soFar.weights + roundWeight
        }
    }, {
        sum: 0,
        weights: 0,
    });
    const calculatedRating = sum/weights;
    return Math.round(calculatedRating);
}
