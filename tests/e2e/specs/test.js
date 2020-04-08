// https://docs.cypress.io/api/introduction/api.html

describe("everything", () => {
  it("sign up", () => {
    cy.visit("/");
    cy.contains("Create Account").click();
    cy.get("#fullname").type("test full name");
    cy.get("#user").type("test user");
    cy.get("#password").type("test password");
    cy.contains("Sign up").click();
  });

  it("sign in", () => {
    cy.visit("/");
    cy.get("#user").type("test user");
    cy.get("#password").type("test password");
    cy.contains("Sign in").click();
    cy.contains("Success! You are now logged in");
  });
});
