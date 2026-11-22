import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  startApplicationPage,
  paymentPlanPage,
} from "../../globalPagesSetup.js";

When(
  "customer provides {string} personal details",
  async function (fieldSet) {
    await startApplicationPage.enterFirstName(faker.person.firstName());
    await startApplicationPage.enterLastName(faker.person.lastName());
    await startApplicationPage.enterEmail(faker.internet.email());
    await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));

    if (fieldSet === "all fields") {
      await startApplicationPage.selectHowDidYouHearAboutUs("Google");
    }
  }
);

When("customer clicks the Next button", async function () {
  await startApplicationPage.clickNextButton();
});

Then("customer should be taken to step 2", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

