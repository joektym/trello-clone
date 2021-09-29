Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelId", (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args);
});
