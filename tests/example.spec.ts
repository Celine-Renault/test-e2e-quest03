import { test, expect } from "@playwright/test";
// fontion test et expect de l outils playwright

// 1er test
// fontion test : 2 parametres,
// le 1er une string qui verifie la presence d'un titre
// le 2e une fonction de call back appele par PlayWright lors de l'execution du test
// cette fonction du 2e param est appele avec un objet PAGE
// permettant de simuler les interactions avec le navigateurs et de faire des verifications
test("has title", async ({ page }) => {
	// debut du test : je demande au navigateur de se rendre sur el site de playWright
	await page.goto("https://playwright.dev/");

	// ensuite je verifie que le titre de la page contient bien le texte Playwright
	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);

	// remplacer par cette ligne pour generer un erreur
	// await expect(page).toHaveTitle(/NOT_EXISTING/);
});

// 2e test, avec l'obet page, je cible un element avce la query getByRole
test("get started link", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// Click the get started link.
	// je recuper le lien qui a le nom Get Started
	// et je click sur le lien ce qui a pour effet de changer le navigateur de page click()
	// await page.getByRole("link", { name: "Get started" }).click();
	const getStarted = page.getByRole("link", { name: "Get started" });
	// Expects the URL to contain intro.
	// je verifie que le lien auquel je fais reference
	//contient bien un attribut href qui vaut /doc/intro
	await expect(getStarted).toHaveAttribute("href", "/docs/intro");

	// click sur le lien, je change de page
	await getStarted.click();
	// je termine el teste en verifiant que l'URL de la page sur laquelle je viens de naviguer finti par "intro"
	await expect(page).toHaveURL(/.*intro/);
});

// 3e test pour generer une erreur dans le test
// test("homepage has title and links to intro page", async ({ page }) => {
// 	await page.goto("https://playwright.dev/");
// 	// Expect a title "to contain" a substring.
// 	await expect(page).toHaveTitle(/NOT_EXISTING/);
// });
