/* global Then, When, Given */

import {
  openUrl,
  verifyUrl,
  clickButton,
  fillField,
  verifyLabel,
  clickButtonByText,
  fillTextArea,
  clickButtonByDatatest,
  checkRadioButton,
  checkRadioButtonByValue

} from "../page_objects/commons.page";

Given("que o usuário acessa a pagina {string}", page => {
  openUrl(page);
});

When("o usuário for direcionado para {string}", url => {
  verifyUrl(url);
});

Then("clicar no botão {string}", button => {
  clickButton(button);
});

Then("clica no botão {string}", button => {
  clickButtonByDatatest(button);
});

Then("escolhe a opção {string}", button => {
  checkRadioButton(button);
});

Then("seleciona a opção {string}", value => {
  checkRadioButtonByValue(value);
});

Then("preencher o campo {string} com {string}", (field, text) => {
  fillField(field, text);
});

Then("preencher a textArea {string} com {string}", (field, text) => {
  fillTextArea(field, text);
});

Then("clico no botão com o texto {string}", label => {
  clickButtonByText(label);
});

Then(
  "verifico a existencia do elemento {string} com o texto {string}",
  (element, label) => {
    verifyLabel(element, label);
  }
);

