describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.wait(2000);
  });

  it("should go to the homepage", () => {
    cy.get("h1").should("contain", "National Parks");
  });

  it("Should have a search input", () => {
    cy.get("input")
      .invoke("attr", "placeholder")
      .should("contain", "Search for a National Park!");
  });

  it("should search with enter key", () => {
    cy.get("input").type(" {insert} Abr");
  });

  it("should click lincoln birth place link", () => {
    cy.get("input").type("abr{enter}");
    cy.get(".dataResult").click();
  });

  // it('should populate results after enter', () => {
  //   cy.get('li').should('')
  // })
});
