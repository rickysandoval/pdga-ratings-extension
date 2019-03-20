
import { Observable, BehaviorSubject} from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Round } from '../vos/round.vo';
import { SAVED_ROUNDS_STORAGE_KEY } from '../shared/constants';
import { debugLog } from '../shared/utils';

class UserCreatedRounds {
    savedRounds: Observable<{
        [pdgaNumber: string]: Round[]
    }>;
    private savedRoundsSubject: BehaviorSubject<{
        [pdgaNumber: string]: Round[]
    }>;

    constructor() {
        this.savedRoundsSubject = new BehaviorSubject({});
        this.savedRounds = this.savedRoundsSubject.asObservable().pipe(
            shareReplay()
        );

        chrome.storage.onChanged.addListener((changes, namespace) => {
            if (changes[SAVED_ROUNDS_STORAGE_KEY]) {
                debugLog('Stored user info change: ', changes[SAVED_ROUNDS_STORAGE_KEY].newValue);
                this.savedRoundsSubject.next(changes[SAVED_ROUNDS_STORAGE_KEY].newValue)
            }
        });
    }

    addRound() {
        
    }
}