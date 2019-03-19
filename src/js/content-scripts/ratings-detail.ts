import { Round } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating } from "../shared/ratings-detail-data-scraping";

let rounds = getIncludedRounds();
let currentRating = getCurrentRating();
let calculatedRating = calculateRating(rounds);

console.log(`Calculated Rating: ${calculatedRating}`)
console.log(`Actual Rating: ${currentRating}`);

