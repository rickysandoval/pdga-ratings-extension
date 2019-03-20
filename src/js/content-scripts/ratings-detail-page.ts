import { Round, SavedRound } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating, getDoubleWeightedRoundRows, getPdgaNumber } from "../shared/ratings-detail-data-scraping";
import Vue from 'vue';
import VueRx from 'vue-rx';
import BootstrapVue from 'bootstrap-vue';
import { map, tap } from "rxjs/operators";

import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { documentReady, roundSort } from "../shared/utils";
import AddRoundFormComponent from '../components/AddRoundFormComponent.vue';

Vue.use(VueRx);
Vue.use(BootstrapVue);


documentReady(() => {
    /** Get Data */
    let rounds = getIncludedRounds();
    let currentRating = getCurrentRating();
    let pdgaNumber = getPdgaNumber();

    const savedRounds = UserCreatedRoundsService.savedRounds.pipe(
        map(hash => hash[pdgaNumber] || {}),
        map(hash => Object.values(hash)),
        map(rounds => [...rounds].sort(roundSort))
    );
    savedRounds.subscribe(userAddedRounds => {
        console.log(userAddedRounds);

        let calculatedRating = calculateRating([...userAddedRounds, ...rounds]);
        addRoundsAndFormat(userAddedRounds);

        console.log(`Calculated Rating: ${calculatedRating}`)
        console.log(`Actual Rating: ${currentRating}`);
    });

    let userRoundControls = document.createElement('div');
    userRoundControls.classList.add('user-round-controls');
    userRoundControls.classList.add('cf');
    document.querySelector('.pane-player-player-stats .item-list').appendChild(userRoundControls);


    let addRoundLink = document.createElement('a');
    addRoundLink.innerText = 'Add Round';
    addRoundLink.classList.add('add-round-link');
    addRoundLink.addEventListener('click', () => {
        openAddRoundForm(pdgaNumber);
    });
    userRoundControls.appendChild(addRoundLink);
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
    Array.from(document.querySelectorAll('.user-added-round')).forEach(element => element.parentElement.removeChild(element));

    const tableBody = document.querySelector('#player-results-details tbody');

    [...rounds].reverse().forEach((round, idx) => {
        let date = new Date(round.roundDate).toLocaleDateString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        });
        let roundRow = document.createElement('tr');
        roundRow.classList.add('user-added-round');
        roundRow.classList.add('included');
        roundRow.classList.add(idx % 2 === 0 ? 'even' : 'odd');
        roundRow.innerHTML = `
            <td class="tournament">${round.tournamentName}</td>
            <td class="tier"></td>
            <td class="date">${date}</td>
            <td class="round">${round.roundNumber}</td>
            <td class="score"></td>
            <td class="round-rating">${round.roundRating}</td>
            <td class="evaluated"></td>
            <td class="included"></td>
        `;
        tableBody.insertBefore(roundRow, tableBody.firstChild);
    });

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
