import { isProd } from "./constants";

export function debugLog(...args) {
    if (!isProd) {
        console.log.apply(console, args)
    }
}