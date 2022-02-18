/// <reference types = "cypress" />

import { LandingPage } from "./landing-page-page";

export class AccountCreatedPage {
  selectors = {
    accountCreatedHeader: "Account Created!",
    continueBtn: "[data-qa='continue-button']",
  };

  checkAccountCreated() {
    cy.contains("b", this.selectors.accountCreatedHeader).should("be.visible");
    cy.get(this.selectors.continueBtn).click();
    return new LandingPage();
  }
}

export const accountCreatedPage = new AccountCreatedPage();
