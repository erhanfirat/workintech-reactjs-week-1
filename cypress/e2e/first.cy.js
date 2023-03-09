describe("First Cypress E2E Test", () => {
  it("Open home page", () => {
    const testResult = 123;
    expect(testResult).to.equal(123);

    cy.visit("/");

    // cy.get("#name").type("Selamlar");
    const input1 = cy.get("[data-test-id='name-input']");
    input1.type("Selamlar");
    input1.clear();
    input1.type("Ali");

    input1.should("have.value", "Ali");

    const inputCheck = cy.get("[data-test-id='above-18-checkbox']");
    inputCheck.check();

    inputCheck.should("have.checked");
  });
});
