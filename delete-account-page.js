/// <reference types = "cypress" />

export class DeleteAccountPage {
  selectors = {
    newUserSignUpText: "New User Signup!",
    signUpEmail: "[data-qa='signup-email']",
    signUpName: "[data-qa='signup-name']",
    signUpBtn: "[data-qa='signup-button']",
  };

  deleteAccount() {
    cy.get(this.selectors.signUpName).type(userName);
  }
}

export const deleteAccountPage = new DeleteAccountPage();
