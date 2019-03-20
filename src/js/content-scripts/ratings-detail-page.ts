import { Round, SavedRound } from "../vos/round.vo";
import { calculateRating } from "../shared/ratings-utils";
import { getIncludedRounds, getCurrentRating, getPdgaNumber, addRoundsAndFormat } from "../shared/ratings-detail-dom-manipulation";
import Vue from 'vue';
import VueRx from 'vue-rx';
import BootstrapVue from 'bootstrap-vue';
import { map, tap } from "rxjs/operators";

import { UserCreatedRoundsService } from "../services/user-created-rounds.service";
import { documentReady, roundSort } from "../shared/utils";
import AddRoundFormComponent from '../components/AddRoundFormComponent.vue';
import AdjustedRatingComponent from '../components/AdjustedRatingComponent.vue';

Vue.use(VueRx);
Vue.use(BootstrapVue);


documentReady(() => {
    /** Get Data */
    let rounds = getIncludedRounds();
    let currentRating = getCurrentRating();
    let pdgaNumber = getPdgaNumber();

    /* Create page sections */
    createAdjustedRatingNode();
    let AdjustedRatingApp = new Vue({
        el: '#adjusted-rating-node',
        render: function(h) {
            return h(AdjustedRatingComponent, {
                props: {
                    pdgaNumber,
                    currentRating,
                    adjustedRating: this.adjustedRating
                }
            });
        },
        data: {
            adjustedRating: null
        }
    });

    const savedRounds = UserCreatedRoundsService.savedRounds.pipe(
        map(hash => hash[pdgaNumber] || {}),
        map(hash => Object.values(hash)),
        map(rounds => [...rounds].sort(roundSort))
    );
    savedRounds.subscribe(userAddedRounds => {
        console.log(userAddedRounds);

        let calculatedRating = calculateRating([...userAddedRounds, ...rounds]);

        addRoundsAndFormat(userAddedRounds);
        AdjustedRatingApp.adjustedRating = calculatedRating;

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

function createAdjustedRatingNode() {
    let node = document.createElement('div');
    node.id = 'adjusted-rating-node'
    document.querySelector('.panel-display > .panel-panel > .inside').insertBefore(node, document.querySelector('.pane-player-player-stats'));
}

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
