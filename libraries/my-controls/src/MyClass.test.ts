import { describe, it, expect } from "vitest";
import { MyClass } from "./MyClass";

describe("MyClass", () => {
  it("should do something", () => {
    const mc = new MyClass();
    expect(mc.hello("world")).toBe("Hello, world!");
  });
});
