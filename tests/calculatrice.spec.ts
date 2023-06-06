// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

// test("test add and multipl", async ({ page }) => {
// 	await page.goto("https://www.desmos.com/scientific?lang=fr");
// 	await page.pause();
// });

test("addition", async ({ page }) => {
	await page.goto("https://www.desmos.com/scientific?lang=fr");

	await page.getByRole("button", { name: "1" }).click();
	await page.getByRole("button", { name: "Plus" }).click();
	await page.getByRole("button", { name: "1" }).click();
	await page.getByRole("button", { name: "Entrée", exact: true }).click();

	await expect(
		page.getByRole("region", { name: "Expression List" })
	).toHaveText(/equals 2/i);
});

test("multiplier", async ({ page }) => {
	await page.goto("https://www.desmos.com/scientific?lang=fr");

	await page.getByRole("button", { name: "2" }).click();
	await page.getByRole("button", { name: "Multiplier" }).click();
	await page.getByRole("button", { name: "2" }).click();
	await page.getByRole("button", { name: "Entrée", exact: true }).click();

	await expect(
		page.getByRole("region", { name: "Expression List" })
	).toHaveText(/equals 4/i);
});
