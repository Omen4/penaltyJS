import { describe, expect, test } from "@jest/globals";
import { tirAuBut, tourDeTirs, butEnOr, ramenerLaCoupeALaMaison, nousAvonsUnGagnant} from "../src/exoPenalty1.js";

describe("penalty nousAvonsUnGagnant", () => {
  test("nousAvonsUnGagnant(3,0,3) should return True", () => {
    expect(nousAvonsUnGagnant(3, 0, 3)).toEqual(true);
  });
  test("nousAvonsUnGagnant(5,5,5) should return False", () => {
    expect(nousAvonsUnGagnant(5, 5, 5)).toEqual(false);
  });
});

describe("penalty tirAuBut", () => {
  test("tirAuBut return 0", () => {
    expect(tirAuBut(0.11)).toEqual(0);
  });
  test("tirAuBut return 1", () => {
    expect(tirAuBut(0.51)).toEqual(1);
  });
});

