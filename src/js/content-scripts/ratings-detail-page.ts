import { Round } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating, getDoubleWeightedRoundRows, getPdgaNumber } from "../shared/ratings-detail-data-scraping";
import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { map, tap } from "rxjs/operators";

let rounds = getIncludedRounds();
let currentRating = getCurrentRating();
let pdgaNumber = getPdgaNumber();

let savedRounds = UserCreatedRoundsService.savedRounds.pipe(
    map(hash => hash[pdgaNumber] || {}),
    map(hash => Object.values(hash))
);

savedRounds.subscribe(rounds => console.log(rounds));


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
    element.querySelector('.round-rating').classList.add('double-weighted-round');
});