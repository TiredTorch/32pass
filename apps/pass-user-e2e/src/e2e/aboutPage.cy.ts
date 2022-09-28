
describe(
	"32Pass About Page",
	() => {
		beforeEach(() => {
			cy.visit("/about");
		});
		it(
			"Should have resourse title",
			() => {
				cy.get(`[data-cy="res-title"]`).contains(/About resourse/i);
			}
		);
		it(
			"Should have about body text",
			() => {
				cy.get(`[data-cy="about-root"]`).contains(/want to stay in they favori/i);
			}
		);
		it(
			"Should have creators title",
			() => {
			  cy.get('[data-cy="creat-title"]').contains(/Creators & developers/i);
			}
		  );
		  it(
			"Should navigate back to auth form",
			() => {
			  cy.url().should(
					"include",
					"/about"
			  );
			  cy.get('[data-cy="unauth-header-home-button"]').click();
			  cy.url().should(
					"include",
					"/login"
			  );
			}
		  );
	}
);
