/// <reference types = "cypress" />

import { AccountCreatedPage } from "./account-created-page";
import { AccountInfoPage } from "./account-info-page";
import { LandingPage } from "./landing-page-page";

export class LoginRegisterPage {
  selectors = {
    newUserSignUpText: "New User Signup!",
    signUpEmail: "[data-qa='signup-email']",
    signUpName: "[data-qa='signup-name']",
    signUpBtn: "[data-qa='signup-button']",
    loginEmail: "[data-qa='login-email']",
    loginPass: "[data-qa='login-password']",
    loginBtn: "[data-qa='login-button']",
  };

  register(userName, email) {
    cy.get(this.selectors.signUpName).type(userName);
    cy.get(this.selectors.signUpEmail).type(email);
    cy.get(this.selectors.signUpBtn).click();
    return new AccountInfoPage();
  }

  login(email, pass) {
    cy.get(this.selectors.loginEmail).type(email);
    cy.get(this.selectors.loginPass).type(pass);
    cy.get(this.selectors.loginBtn).click();
    return new LandingPage();
  }
}

export const loginRegisterPage = new LoginRegisterPage();
