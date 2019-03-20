import { Round } from "../vos/round.vo";

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
    rounds.sort((a,b) => {
        if (a.round.roundDate === b.round.roundDate) {
            return a.round.roundNumber > b.round.roundNumber ? -1 : 1;
        } else {
            return a.round.roundDate > b.round.roundDate ? -1 : 1;
        }
    });
    let numDoubleRatedRounds = Math.round(rounds.length / 4);
    let doubleRatedRounds = rounds.slice(0,numDoubleRatedRounds);

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

    let tournamentName = roundElement.querySelector('.tournament a').textContent;
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