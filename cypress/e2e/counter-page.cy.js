beforeEach(() => {
  cy.visit("/counter");
});

describe("Counter Page Test", () => {
  it("Navigate Counter PAge", () => {
    // cy.visit("/counter");
  });

  it("Toggle Counter component", () => {
    // cy.visit("/counter");
    const toggleButton = cy.get("[data-test-id='toggle-counter']");
    toggleButton.click();
  });

  it("Check Counter value for 5 click on increase button", () => {
    // cy.visit("/counter");
    const increaseButton = cy.get("[data-test-id='increase-button']");
    increaseButton.click();
    increaseButton.click();
    increaseButton.click();
    increaseButton.click();
    increaseButton.click();

    const countSpan = cy.get("[data-test-id='count-value-span']");
    countSpan.contains("100");
  });
});
