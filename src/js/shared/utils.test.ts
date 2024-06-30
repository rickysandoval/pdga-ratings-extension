import testData from "./test-data"
import { getStandardDeviation, getStandardDeviationOther } from "./utils";

describe('getStandardDeviation()', () => {
  testData.forEach(({ name, rounds}) => {
    it('test standard deviation for ' + name, () => {
      const justRatings = rounds.map(({ roundRating }) => roundRating);
      expect(getStandardDeviation(rounds)).toBe(getStandardDeviationOther(justRatings));
    })
  })
})
