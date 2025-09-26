import { describe, expect, it, vi } from "vitest";
import { once } from "../once";
const sum = (a, b) => a + b;
describe("Once", () => {
  it("to be called only once", () => {
    const mockFun = vi.fn(sum);
    const OnlyOnce = once(mockFun);
    const first = OnlyOnce(1, 2);
    const second = OnlyOnce(5, 6);

    expect(mockFun).toBeCalledTimes(1);
    expect(first).toBe(3);
    expect(second).toBe(3);
  });
});
