describe("Trello Clone Integration Testing", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Must Have Four List Columns", () => {
        cy.getBySelId("list-column-title").should("have.length", 4);
    });
});
