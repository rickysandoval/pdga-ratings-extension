import { Round } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating, getDoubleWeightedRoundRows, getPdgaNumber } from "../shared/ratings-detail-data-scraping";

let rounds = getIncludedRounds();
let currentRating = getCurrentRating();
let pdgaNumber = getPdgaNumber();
console.log(pdgaNumber);


let extraRounds: Round[] = [{
    roundDate: new Date().getTime(),
    tournamentName: 'Palisade',
    roundNumber: 1,
    roundRating: 1014
},
{
    roundDate: new Date().getTime(),
    tournamentName: 'Palisade',
    roundNumber: 2,
    roundRating: 946
},
{
    roundDate: new Date().getTime(),
    tournamentName: 'Palisade',
    roundNumber: 3,
    roundRating: 965
},
{
    roundDate: new Date().getTime(),
    tournamentName: 'St Patties Day',
    roundNumber: 1,
    roundRating: 964
},
{
    roundDate: new Date().getTime(),
    tournamentName: 'St Patties Day 2',
    roundNumber: 2,
    roundRating: 947
}]
let calculatedRating = calculateRating([...rounds, ...extraRounds]);

console.log(`Calculated Rating: ${calculatedRating}`)
console.log(`Actual Rating: ${currentRating}`);




let doubleWeightedRows = getDoubleWeightedRoundRows();

doubleWeightedRows.forEach(element => {
    element.querySelector('.round-rating').setAttribute('style', 'color: #3b9640;')
});