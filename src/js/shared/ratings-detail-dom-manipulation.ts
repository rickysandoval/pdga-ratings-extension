import { Round, SavedRound } from "../vos/round.vo";
import { debugLog, roundSort } from "./utils";

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
    if (rounds.length < 9) {
        return [];
    }
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
        const [, end] = roundDateText.split(' to ');
        roundDateText = end
    }

    const tournamentName = roundElement.querySelector('.tournament').textContent;
    const roundNumber = parseInt(roundElement.querySelector('.round').textContent);
    const tooltipId = (roundElement.querySelector('.round') as HTMLElement).dataset.tooltipContent
    const tooltipContent = document.querySelector(tooltipId)?.textContent;
    const holesText = /; (\d+) holes;/.exec(tooltipContent)?.[1];
    const numberOfHoles = holesText ? Number(holesText) : 18;
    const roundDate = new Date(roundDateText).getTime();
    const roundRating = parseInt(roundElement.querySelector('.round-rating').textContent);

    const round: Round = {
        tournamentName,
        roundNumber,
        roundDate,
        roundRating,
        holes: numberOfHoles,
    }
    return round;
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
    
    let lastAddedRoundDate = rounds.length ? rounds[0].roundDate : null;
    let includedRoundRows = Array.from(document.querySelectorAll('#player-results-details tbody tr.included'));

    let countIncludedSoFar = rounds.length;
    includedRoundRows.forEach(roundElement => {
        let roundDateText = roundElement.querySelector('.date').textContent;
        if (roundDateText.indexOf(' to ') >= 0) {
            roundDateText = roundDateText.split(' to ')[1];
        }

        let roundDate = new Date(roundDateText).getTime();
        const roundIsMoreThanOneYearOld = lastAddedRoundDate - roundDate > 31536000000;
        const roundIsMoreThanTwoYearsOld = lastAddedRoundDate - roundDate > 31536000000 * 2;
        if (lastAddedRoundDate && (roundIsMoreThanTwoYearsOld || roundIsMoreThanOneYearOld && countIncludedSoFar >= 8) ) {
            roundElement.classList.remove('included');
            roundElement.classList.remove('evaluated');
            roundElement.classList.add('not-included');
            roundElement.classList.add('user-adjusted');
            roundElement.classList.add('not-evaluated');
        }
        countIncludedSoFar += 1;
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
            <td class="division"></td>
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

export function addRoundDroppedScore(standardDeviation: number, scoreDropped: number) {
    debugLog("Round dropped: ", scoreDropped);
    debugLog("Standard deviation: ", standardDeviation);

    const standardDeviationId = 'standard-deviation-element';
    const roundDroppedId = 'round-dropped-element';

    let standardDeviationElement = document.getElementById(standardDeviationId);
    let roundDroppedElement = document.getElementById(roundDroppedId);

    if (!standardDeviationElement) {
        standardDeviationElement = document.createElement('div');
        standardDeviationElement.id = standardDeviationId;
    }
    
    if (!roundDroppedElement) {
        roundDroppedElement = document.createElement('div');
        roundDroppedElement.id = roundDroppedId;
    }

    standardDeviationElement.innerHTML = `Standard Deviation: <strong>${standardDeviation.toFixed(2)}</strong>`;
    roundDroppedElement.innerHTML = `Round dropped if below: <strong>${scoreDropped}</strong>`;

    const ratingsDetailTitleElement = document.querySelector('.pane-player-player-stats .pane-title');
    if (ratingsDetailTitleElement) {
        if (!document.getElementById(standardDeviationId)) {
            ratingsDetailTitleElement.insertAdjacentElement('afterend', standardDeviationElement);
        }
        if (!document.getElementById(roundDroppedId)) {
            ratingsDetailTitleElement.insertAdjacentElement('afterend', roundDroppedElement);
        }
    }
}
