import { Round } from "../vos/round.vo";

export function getIncludedRounds() {
    let roundRows = document.querySelectorAll('#player-results-details tbody tr.included');
    let rounds = Array.from(roundRows).map(round => {
        let tournamentName = round.querySelector('.tournament a').textContent;
        let roundNumber = round.querySelector('.round').textContent;
        let roundDateText = round.querySelector('.date').textContent;
        if (roundDateText.indexOf(' to ') >= 0) {
            roundDateText = roundDateText.split(' to ')[1];
        }

        let roundName = `${tournamentName} - Round ${roundNumber}`;
        let roundDate = new Date(roundDateText).getTime();
        let roundRating = parseInt(round.querySelector('.round-rating').textContent);
      
        return <Round>{
            roundName,
            roundDate,
            roundRating
        };
    });
    console.log(rounds);

    return rounds;
}

export function getCurrentRating() {
    return parseInt(document.querySelector('ul.player-info .current-rating').childNodes[2].textContent.trim());
}