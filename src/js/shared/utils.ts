import { isProd } from "./constants";
import { Round } from "../vos/round.vo";

export function debugLog(...args) {
  if (!isProd) {
    console.log.apply(console, args);
  }
}

export function generateUniqueId(): string {
  return Math.random().toString(32).substr(2, 9);
}

export function debugLogError(...args) {
  if (!isProd) {
    console.error.apply(console, args);
  }
}

export function documentReady(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

export function roundSort(a, b) {
  if (a.roundDate === b.roundDate) {
    return a.roundNumber < b.roundNumber ? -1 : 1;
  } else {
    return a.roundDate > b.roundDate ? -1 : 1;
  }
}

export function getStandardDeviation(rounds: Round[]) {
  let mean =
    rounds.reduce((accum, next) => {
      return accum + next.roundRating;
    }, 0) / rounds.length;
  let sigma = rounds.reduce((accum, next) => {
    let diff = next.roundRating - mean;
    return accum + diff * diff;
  }, 0);
  return Math.sqrt(sigma / rounds.length);
}

export function getStandardDeviationOther(array) {
  const n = array.length;
  const mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n,
  );
}
