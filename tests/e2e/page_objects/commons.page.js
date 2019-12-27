const commonsPage = {
  openUrl: page => {
    cy.visit(page);
  },
  verifyUrl: url => {
    cy.url().should("include", url);
  },
  clickButton: button => {
    cy.get(pageObjects.getId(button))
      .first()
      .click();
  },
  clickButtonByDatatest: button => {
    cy.get(pageObjectsByDatatest.getDataTestByDatatest(button))
      .first()
      .click();
  },
  checkRadioButton: button => {
    cy.get(pageObjectsByDatatest.getDataTestByDatatest(button))
      .first()
      .check({force: true});
  },
  checkRadioButtonByValue: id => {
    cy.get(id)
      .check();
  },
  fillField: (field, text) => {
    cy.get(pageObjects.getId(field))
      .first()
      .focus()
      .type(text);
  },
  verifyLabel: (element, label) => {
    cy.get(pageObjects.getId(element)).should("have.contain", label);
  },
  clickButtonByText: label => {
    cy.contains(label)
      .first()
      .click();
  },
  fillFieldByText: (field, text) => {
    cy.contains(field)
      .first()
      .focus()
      .type(text);
  },
  fillTextArea: (textArea, text) => {
    cy.get(pageObjectsByDatatest.getDataTestByDatatest(textArea))
      .first()
      .focus()
      .clear()
      .type(text);
  },
};

const pageObjectsByDatatest = {
  getDataTestByDatatest(datatest) {
    return `[datatest="${datatest}"]`;
  }
};

const pageObjects = {
  getId(id) {
    return `[id="${id}"]`;
  }
};

module.exports = commonsPage;
