import { describe, expect, it, vi } from "vitest";
import { debounce, debounceWithOpt } from "../debounce";

describe("debounce", () => {
  it("call the function with latest args", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const debounced = debounce(mockFunc, 200);

    debounced("A");
    debounced("B");
    vi.advanceTimersByTime(200);

    expect(mockFunc).toBeCalledTimes(1);
    expect(mockFunc).toBeCalledWith("B");
  });

  it("function should not be called before time delay", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const debounced = debounce(mockFunc, 200);

    debounced("Hello");

    vi.advanceTimersByTime(100);

    expect(mockFunc).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);

    expect(mockFunc).toBeCalledTimes(1);
    expect(mockFunc).toBeCalledWith("Hello");
  });

  it("To handle rapid multiple calls ", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const debounced = debounce(mockFunc, 200);

    debounced("Hello");
    vi.advanceTimersByTime(100);
    debounced("Hello2");
    vi.advanceTimersByTime(100);
    debounced("Hell03");
    vi.advanceTimersByTime(200);

    expect(mockFunc).toBeCalledTimes(1);
    expect(mockFunc).toBeCalledWith("Hell03");
  });
});

describe("debounce Immediate", () => {
  it("Handle Immediate optn as accepted", () => {
    vi.useFakeTimers();
    const mockFunc = vi.fn();
    const debounced = debounceWithOpt(mockFunc, 200, { immediate: true });
    debounced("AAAA");
    vi.advanceTimersByTime(100);
    debounced("BBBB");
    vi.advanceTimersByTime(200);
    debounced("CCCC");

    expect(mockFunc).toBeCalledTimes(2);
    expect(mockFunc).toHaveBeenNthCalledWith(1, "AAAA");
    expect(mockFunc).toHaveBeenNthCalledWith(2, "CCCC");
  });
});
