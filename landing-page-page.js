/// <reference types = "cypress" />

import { LoginRegisterPage } from "./login-register-page";

export class LandingPage {
  selectors = {
    sliderCarousel: "#slider-carousel",
    signUpLoginLink: "Signup / Login",
    loggedInAsUserName: ".navbar-nav > li:last-child > a > b",
    deleteAccountBtn: "Delete Account",
  };

  verifyLandingPageOpened() {
    cy.get(this.selectors.sliderCarousel).should("be.visible");
    return this;
  }
  navigateToSignUpAndLoginPage() {
    cy.contains(this.selectors.signUpLoginLink).click();
    return new LoginRegisterPage();
  }

  checkLandingScreenWithLoggedInUser(userName) {
    cy.get(this.selectors.loggedInAsUserName).should("contain.text", userName);
  }
  deleteAccountAfterLogin() {
    cy.contains(this.selectors.deleteAccountBtn).should("be.visible");
  }
}

export const landingPage = new LandingPage();
