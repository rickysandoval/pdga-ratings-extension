import { Round, SavedRound } from "../vos/round.vo";
import { roundSort } from "./utils";

export function getIncludedRounds(): Round[] {
    let roundRows = document.querySelectorAll('#player-results-details tbody tr.included');
    let rounds = Array.from(roundRows).map(round => roundFromRow(round));

    return rounds;
}


export function getDoubleWeightedRoundRows() {
    let roundRows = document.querySelectorAll('#player-results-details tbody tr.included');
    let rounds = Array.from(roundRows).map(row => {
        return {
            element: row,
            round: roundFromRow(row)
        };
    });
    rounds.sort(roundSort);
    let numDoubleRatedRounds = Math.round(rounds.length / 4);
    let doubleRatedRounds = rounds.slice(0, numDoubleRatedRounds);

    return doubleRatedRounds.map(round => round.element);
}


export function getCurrentRating(): number {
    if (document.querySelector('ul.player-info .current-rating')) {
        return Math.round(parseFloat(document.querySelector('ul.player-info .current-rating').childNodes[2].textContent.trim()));
    } else {
        return 0;
    }
}

export function getPdgaNumber(): string {
    return document.querySelector('.pane-page-title h1').textContent.split('#')[1];
}


function roundFromRow(roundElement: Element) {
    let roundDateText = roundElement.querySelector('.date').textContent;
    if (roundDateText.indexOf(' to ') >= 0) {
        roundDateText = roundDateText.split(' to ')[1];
    }

    let tournamentName = roundElement.querySelector('.tournament').textContent;
    let roundNumber = parseInt(roundElement.querySelector('.round').textContent);
    let roundDate = new Date(roundDateText).getTime();
    let roundRating = parseInt(roundElement.querySelector('.round-rating').textContent);

    return <Round>{
        tournamentName,
        roundNumber,
        roundDate,
        roundRating
    };
}

export function addRoundsAndFormat(rounds: SavedRound[]) {
    Array.from(document.querySelectorAll('.double-weighted-round')).forEach(element => element.classList.remove('double-weighted-round'));
    Array.from(document.querySelectorAll('.user-added-round')).forEach(element => element.parentElement.removeChild(element));
    Array.from(document.querySelectorAll('.not-included.user-adjusted')).forEach(element => {
        element.classList.remove('not-included');
        element.classList.remove('user-adjusted');
        element.classList.remove('not-evaluated');
        element.classList.add('included');
        element.classList.add('evaluated');
    });
    
    let lastAddedRoundDate = rounds[0].roundDate;
    let includedRoundRows = Array.from(document.querySelectorAll('#player-results-details tbody tr.included'));

    includedRoundRows.forEach(roundElement => {
        let roundDateText = roundElement.querySelector('.date').textContent;
        if (roundDateText.indexOf(' to ') >= 0) {
            roundDateText = roundDateText.split(' to ')[1];
        }

        let roundDate = new Date(roundDateText).getTime();
        if (lastAddedRoundDate - roundDate > 31536000000) {
            roundElement.classList.remove('included');
            roundElement.classList.remove('evaluated');
            roundElement.classList.add('not-included');
            roundElement.classList.add('user-adjusted');
            roundElement.classList.add('not-evaluated');
        }
    });


    const tableBody = document.querySelector('#player-results-details tbody');
    
    [...rounds].reverse().forEach((round, idx) => {
        let date = new Date(round.roundDate).toLocaleDateString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        });
        let roundRow = document.createElement('tr');
        roundRow.classList.add('user-added-round');
        if (!round.dropped) {
            roundRow.classList.add('included');
        } else {
            roundRow.classList.add('not-included');
        }

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
