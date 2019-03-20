import { isProd } from "./constants";

export function debugLog(...args) {
    if (!isProd) {
        console.log.apply(console, args)
    }
}

export function generateUniqueId(): string {
    return Math.random().toString(32).substr(2, 9);
}

export function debugLogError(...args) {
    if (!isProd) {
        console.error.apply(console, args)
    }
}

export function documentReady(fn) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}