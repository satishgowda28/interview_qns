import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { debounce } from "./index";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // take control of time
  });

  afterEach(() => {
    vi.useRealTimers(); // restore after each test
  });
  test("can be initalize", (done) => {
    const increment = debounce(() => {}, 50);
    expect(increment).toBeTruthy();
  });
  test("execute after some time", (done) => {
    let i = 1;
    const increment = debounce(() => {
      i += 1;
    }, 10);
    increment();
    expect(i).toBe(1);
    vi.advanceTimersByTime(20);
    expect(i).toBe(2);
  });
});
