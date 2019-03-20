import { Round, SavedRound } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating, getDoubleWeightedRoundRows, getPdgaNumber } from "../shared/ratings-detail-data-scraping";
import Vue from 'vue';
import VueRx from 'vue-rx';
import BootstrapVue from 'bootstrap-vue';
import { map, tap } from "rxjs/operators";

import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { documentReady } from "../shared/utils";
import AddRoundFormComponent from '../components/AddRoundFormComponent.vue';

Vue.use(VueRx);
Vue.use(BootstrapVue);


documentReady(() => {
    let rounds = getIncludedRounds();
    let currentRating = getCurrentRating();
    let pdgaNumber = getPdgaNumber();

    const savedRounds = UserCreatedRoundsService.savedRounds.pipe(
        map(hash => hash[pdgaNumber] || {}),
        map(hash => Object.values(hash))
    );
    savedRounds.subscribe(userAddedRounds => {
        let calculatedRating = calculateRating([...rounds, ...userAddedRounds]);
        addRoundsAndFormat(userAddedRounds);

        console.log(`Calculated Rating: ${calculatedRating}`)
        console.log(`Actual Rating: ${currentRating}`);
    });

    openAddRoundForm(pdgaNumber);

});

function openAddRoundForm(pdgaNumber: string) {
    let node = document.createElement('div');
    node.id = 'add-rating-modal'
    document.body.appendChild(node);
    
    let ModalFormApp = new Vue({
        el: '#add-rating-modal',
        render: h => h(AddRoundFormComponent, {
            props: {
                pdgaNumber
            }
        })
    });
}

function addRoundsAndFormat(rounds: SavedRound[]) {
    Array.from(document.querySelectorAll('.double-weighted-round')).forEach(element => element.classList.remove('double-weighted-round'));

    let doubleWeightedRows = getDoubleWeightedRoundRows();
    doubleWeightedRows.forEach(element => {
        element.querySelector('.round-rating').classList.add('double-weighted-round');
    });
}



// let extraRounds: Round[] = [{
//     roundDate: new Date().getTime(),
//     tournamentName: 'Palisade',
//     roundNumber: 1,
//     roundRating: 1014
// },
// {
//     roundDate: new Date().getTime(),
//     tournamentName: 'Palisade',
//     roundNumber: 2,
//     roundRating: 946
// },
// {
//     roundDate: new Date().getTime(),
//     tournamentName: 'Palisade',
//     roundNumber: 3,
//     roundRating: 965
// },
// {
//     roundDate: new Date().getTime(),
//     tournamentName: 'St Patties Day',
//     roundNumber: 1,
//     roundRating: 964
// },
// {
//     roundDate: new Date().getTime(),
//     tournamentName: 'St Patties Day 2',
//     roundNumber: 2,
//     roundRating: 947
// }]
