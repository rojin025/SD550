import { render, screen, fireEvent } from "@testing-library/react";
import { sum } from "../helper/utils";

describe("Test: Validating Sum Function: ", () => {
  test("Sum two int", () => {
    const res = sum(1, 1);
    expect(res).toEqual(2);
  });

  it("Sum two int must fail", () => {
    const res = sum(1, 3);
    expect(res).toEqual(2);
  });
});
