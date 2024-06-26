import { Round } from "../vos/round.vo";
import { calculateRating, getIncludedAndDroppedRounds } from "./ratings-utils";
import testData, { ricky } from "./test-data";

const dayInMilliseconds = 24 * 60 * 60 * 1000;
const yearInMilliseconds = 365 * dayInMilliseconds;

describe("calculateRating", () => {
  describe("if rounds is empty", () => {
    it("should return 0", () => {
      expect(calculateRating([])).toBe(0);
    });
  });

  describe("if some rounds are missing ratings", () => {
    it("ignores those rounds", () => {
      expect(
        calculateRating([
          {
            roundDate: new Date().getTime(),
            roundRating: null,
            roundNumber: 1,
            tournamentName: "test",
            holes: 18,
          },
          {
            roundDate: new Date().getTime(),
            roundRating: 995,
            roundNumber: 1,
            tournamentName: "test",
            holes: 18,
          },
        ]),
      ).toBe(995);
    });
  });

  describe("if there are less than 9 round ratings", () => {
    const rounds: Round[] = new Array(8).fill(null).map((_, i) => ({
      roundDate: new Date().getTime() - 1000 * i,
      roundNumber: i,
      roundRating: i <= 2 ? 1000 : 950,
      tournamentName: "test",
      holes: 18,
    }));

    it("will not double weight the most recent 25% of rounds", () => {
      expect(calculateRating(rounds)).toBe(969);
    });
  });

  describe("if there are at least 9 round ratings", () => {
    const rounds: Round[] = new Array(9).fill(null).map((_, i) => ({
      roundDate: new Date().getTime() - 1000 * i,
      roundNumber: i,
      roundRating: i <= 2 ? 1000 : 950,
      tournamentName: "test",
      holes: 18,
    }));

    it("will double weight the most recent 25% of rounds", () => {
      expect(calculateRating(rounds)).toBe(975);
    });
  });

  describe("if there are at least 8 rounds in the last 12 months", () => {
    it("will only look at rounds from the last 12 months", () => {
      const roundsThisYear = new Array(8).fill(null).map((_, i) => ({
        roundDate: new Date().getTime(),
        roundNumber: i,
        roundRating: 1000,
        tournamentName: "test",
        holes: 18,
      }));

      const roundsLastYear = new Array(2).fill(null).map((_, i) => ({
        roundDate:
          new Date().getTime() - yearInMilliseconds - 2 * dayInMilliseconds,
        roundNumber: i,
        roundRating: 900,
        tournamentName: "test",
        holes: 18,
      }));

      expect(calculateRating([...roundsLastYear, ...roundsThisYear])).toBe(
        1000,
      );
    });
  });

  describe("if there are not 8 rounds in the last 12 months", () => {
    it("will go back until it finds 8 rounds in the last 24 months", () => {
      const roundsThisYear = new Array(6).fill(null).map((_, i) => ({
        roundDate: new Date().getTime(),
        roundNumber: i,
        roundRating: 1000,
        tournamentName: "test",
        holes: 18,
      }));

      const roundsLastYear = new Array(2).fill(null).map((_, i) => ({
        roundDate:
          new Date().getTime() - yearInMilliseconds - 2 * dayInMilliseconds,
        roundNumber: i,
        roundRating: 900,
        tournamentName: "test",
        holes: 18,
      }));

      expect(calculateRating([...roundsLastYear, ...roundsThisYear])).toBe(975);
    });
  });

  describe("if there are not 8 rounds in the last 24 months", () => {
    it("still wont include rounds older than 24 months", () => {
      const roundsThisYear = new Array(2).fill(null).map((_, i) => ({
        roundDate: new Date().getTime(),
        roundNumber: i,
        roundRating: 1000,
        tournamentName: "test",
        holes: 18,
      }));

      const roundsLastYear = new Array(2).fill(null).map((_, i) => ({
        roundDate:
          new Date().getTime() - yearInMilliseconds - 2 * dayInMilliseconds,
        roundNumber: i,
        roundRating: 1000,
        tournamentName: "test",
        holes: 18,
      }));

      const roundsTwoYearsAgo = new Array(2).fill(null).map((_, i) => ({
        roundDate:
          new Date().getTime() - 2 * yearInMilliseconds - 2 * dayInMilliseconds,
        roundNumber: i,
        roundRating: 1000,
        tournamentName: "test",
        holes: 18,
      }));

      expect(
        calculateRating([
          ...roundsThisYear,
          ...roundsLastYear,
          ...roundsTwoYearsAgo,
        ]),
      ).toBe(1000);
    });
  });

  describe("if some rounds are different lengths than 18 holes", () => {
    it("weights the rounds differently based on number of holes", () => {
      expect(
        calculateRating([
          {
            roundDate: new Date().getTime(),
            roundNumber: 1,
            tournamentName: "test",
            roundRating: 1000,
            holes: 9,
          },
          {
            roundDate: new Date().getTime(),
            roundNumber: 1,
            tournamentName: "test",
            roundRating: 900,
            holes: 27,
          },
        ]),
      ).toBe(925);
    });
  });

  describe("test against PDGA numbers", () => {
    it("test ricky sandoval", () => {
      const { dropped } = getIncludedAndDroppedRounds(ricky.rounds);
      expect(calculateRating(ricky.rounds)).toBe(ricky.rating);
      expect(dropped.length).toBe(3);
    });
    const [ricky, ...restTestData] = testData;
    restTestData.forEach((dataSet) => {
      it("test " + dataSet.name, () => {
        const { dropped } = getIncludedAndDroppedRounds(dataSet.rounds);
        const calculatedRating = calculateRating(dataSet.rounds);
        const ratingDifference = Math.abs(calculatedRating - dataSet.rating)
        expect(ratingDifference).toBeLessThan(3);
        expect(dropped.length).toBe(0);
      });
    });
  });
});
