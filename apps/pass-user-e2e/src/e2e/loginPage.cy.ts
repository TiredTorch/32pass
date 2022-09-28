
describe(
	"32Pass Login Page",
	() => {
		beforeEach(() => {
			cy.visit("/login");
		});

		it(
			"Should have resourse title",
			() => {
				cy.get(".MuiBox-root > a").contains(/sign up/i);
			}
		);
		it(
			"Should navigate to register form",
			() => {
				cy.url().should(
					"include",
					"/login"
				);
				cy.get(".MuiBox-root > a").click();
				cy.url().should(
					"include",
					"/register"
				);
			}
		);
		it(
			"Should navigate to about page",
			() => {
				cy.url().should(
					"include",
					"/login"
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
