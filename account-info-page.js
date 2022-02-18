/// <reference types = "cypress" />

import faker from "@faker-js/faker";
import { AccountCreatedPage } from "./account-created-page";

export class AccountInfoPage {
  selectors = {
    mr: "#id_gender1",
    mrs: "#id_gender2",
    name: "[data-qa='name']",
    password: "[data-qa='password']",
    dayOfBirth: "[data-qa='days']",
    monthOfBirth: "[data-qa='months']",
    yearOfBirth: "[data-qa='years']",
    signUpNewsLetterCheck: "#newsletter",
    specialOffer: "#optin",
    firstName: "[data-qa='first_name']",
    lastName: "[data-qa='last_name']",
    company: "[data-qa='company']",
    address: "[data-qa='address']",
    address2: "[data-qa='address2']",
    country: "[data-qa='country']",
    state: "[data-qa='state']",
    city: "[data-qa='city']",
    zipcode: "[data-qa='zipcode']",
    mobileNumber: "[data-qa='mobile_number']",
    createAccountBtn: "[data-qa='create-account']",
  };

  enterAccountInfo(
    title,
    name,
    password,
    day,
    month,
    year,
    checkNewsLetters,
    receiveSpecialOffer,
    firstName,
    lastName,
    company,
    addressTxt,
    address2Txt,
    country,
    state,
    city,
    zipCode,
    mobile
  ) {
    if (title == "male") {
      cy.get(this.selectors.mr).click();
    } else {
      cy.get(this.selectors.mrs).click();
    }
    cy.get(this.selectors.name).type(name);
    cy.get(this.selectors.password).type(password);
    cy.get(this.selectors.dayOfBirth).select(day);
    cy.get(this.selectors.monthOfBirth).select(month);
    cy.get(this.selectors.yearOfBirth).select(year);
    if (checkNewsLetters == "true")
      cy.get(this.selectors.signUpNewsLetterCheck).click();
    if (receiveSpecialOffer == "true")
      cy.get(this.selectors.specialOffer).click();
    cy.get(this.selectors.firstName).type(firstName);
    cy.get(this.selectors.lastName).type(lastName);
    cy.get(this.selectors.company).type(company);
    cy.get(this.selectors.address).type(addressTxt);
    cy.get(this.selectors.address2).type(address2Txt);
    cy.get(this.selectors.country).select(country);
    cy.get(this.selectors.state).type(state);
    cy.get(this.selectors.city).type(city);
    cy.get(this.selectors.zipcode).type(zipCode);
    cy.get(this.selectors.mobileNumber).type(mobile);
    cy.get(this.selectors.createAccountBtn).click();
    return new AccountCreatedPage();
  }
}

export const accountInfoPage = new AccountInfoPage();
