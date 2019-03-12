import prefersColorScheme from "./index";

test("should be a string", () => {
  expect(typeof prefersColorScheme()).toBe("string");
});

test("should be dark or light", () => {
  expect(["dark", "light"].includes(prefersColorScheme())).toBeTruthy();
});

test("should be dark, light, or unknown", () => {
  expect(["dark", "light", "unknown"].includes(prefersColorScheme())).toBeTruthy();
});
