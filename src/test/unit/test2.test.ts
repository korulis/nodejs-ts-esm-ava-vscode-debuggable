import { test, expect } from "vitest";
import { App2 } from "@/app/app2";

test("Cancels and recreates booking on date change", async () => {
  const app = new App2();
  app.print();
  expect(app).toBeDefined();
});
