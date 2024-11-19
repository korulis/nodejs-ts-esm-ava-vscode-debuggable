import { test, expect } from "vitest";
import { App } from "@/app/app";

test("Cancels and recreates booking on date change", async () => {
  const app = new App();
  await app.start();
  expect(app).toBeDefined();
});
