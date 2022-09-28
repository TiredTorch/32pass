
describe(
	"32Pass Registation Page",
	() => {
		beforeEach(() => {
			cy.visit("/register");
		});

		it(
			"Should have resourse title",
			() => {
				cy.get(".MuiBox-root > a").contains(/log in/i);
			}
		);
		it(
			"Should navigate to register form",
			() => {
				cy.url().should(
					"include",
					"/register"
				);
				cy.get(".MuiBox-root > a").click();
				cy.url().should(
					"include",
					"/login"
				);
			}
		);
		it(
			"Should navigate to about page",
			() => {
				cy.url().should(
					"include",
					"/register"
				);
				cy.get(`[data-cy="about-link"]`).click();
				cy.url().should(
					"include",
					"/about"
				);
			}
		);
	}
);
