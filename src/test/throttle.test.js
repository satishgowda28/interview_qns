import { describe, expect, it, vi } from "vitest";
import { throttleWithTimer } from "../throttle";

describe("Throttle", () => {
  it("Handle trolle with leading=true and trailing=true", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const throttled = throttleWithTimer(mockFunc, 200, {
      leading: true,
      trailing: true,
    });
    throttled("A"); // to be runn immediate
    throttled("B"); // save this args
    throttled("C"); // replace with this

    vi.advanceTimersByTime(300);

    expect(mockFunc).toHaveBeenCalledTimes(2);
    expect(mockFunc).toHaveBeenNthCalledWith(1, "A");
    expect(mockFunc).toHaveBeenNthCalledWith(2, "C");
  });

  it("Handle trolle with leading=true and trailing=false", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const throttled = throttleWithTimer(mockFunc, 200, {
      leading: true,
      trailing: false,
    });
    throttled("A"); // to be runn immediate
    throttled("B"); // not to be called
    throttled("C"); // not to be called
    vi.advanceTimersByTime(300);
    throttled("D"); // to be called

    expect(mockFunc).toHaveBeenCalledTimes(2);
    expect(mockFunc).toHaveBeenNthCalledWith(1, "A");
    expect(mockFunc).toHaveBeenNthCalledWith(2, "D");
  });

  it("Handle trolle with leading=false and trailing=true", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const throttled = throttleWithTimer(mockFunc, 200, {
      leading: false,
      trailing: true,
    });
    throttled("A"); // not to be called
    throttled("B"); // save this args
    throttled("C"); // replace with this
    vi.advanceTimersByTime(300);

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenNthCalledWith(1, "C");
  });

  it("Handle trolle with leading=false and trailing=false", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const throttled = throttleWithTimer(mockFunc, 200, {
      leading: false,
      trailing: false,
    });
    throttled("A"); // not to be called
    throttled("B"); // save this args
    throttled("C"); // replace with this
    vi.advanceTimersByTime(300);

    expect(mockFunc).not.toHaveBeenCalledTimes(1);
  });
});
