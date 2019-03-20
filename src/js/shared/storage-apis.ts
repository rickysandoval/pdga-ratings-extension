import { Observable } from 'rxjs';
import { debugLogError } from './utils';


export function storedDataSetter<T>(storageKey) {
    return function setter(data: T): Observable<true> {
        return Observable.create((observer) => {
            chrome.storage.local.set({ [storageKey]: data }, () => {
                if (chrome.runtime.lastError) {
                    debugLogError(chrome.runtime.lastError.message);
                    observer.error(chrome.runtime.lastError.message);
                } else {
                    observer.next(true);
                    observer.complete();
                }
            });

            return { unsubscribe() { } };
        });
    }
}

export function storedDataGetter<T>(storageKey, fallback = null) {
    return function getter(): Observable<T> {
        return Observable.create((observer) => {
            chrome.storage.local.get([storageKey], (data) => {
                let storedData = data[storageKey] || fallback;
                if (chrome.runtime.lastError) {
                    debugLogError(chrome.runtime.lastError.message);
                    observer.error(chrome.runtime.lastError.message);
                } else {
                    observer.next(storedData);
                    observer.complete();
                }
            });

            return { unsubscribe() { } };
        });
    }
}