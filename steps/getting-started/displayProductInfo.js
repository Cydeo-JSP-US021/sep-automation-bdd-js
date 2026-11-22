import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name is displayed on the information card", async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  await expect(startApplicationPage.programNameOnInfoCard).toHaveText(productInfo.productName);
});

Then("the information card product name matches the left-side product name", async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
    await leftMainPage.programName.innerText()
  );
});

Then("the product price is displayed", async function () {
  const activeRecurringOrOneTimePrice = productInfo.prices.find(
    (price) => price.active && price.upfrontDiscount
  );
  const displayedPrice = activeRecurringOrOneTimePrice.baseAmount -
    activeRecurringOrOneTimePrice.upfrontDiscountAmount;

  await expect(startApplicationPage.programPrice).toBeVisible();
  await expect(startApplicationPage.programPrice).toHaveText(`$${displayedPrice}`);
});

Then("the flexible payment plan text is displayed", async function () {
  await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
});

Then("the return policy and final return date are displayed", async function () {
  await expect(page.getByText("100% refund policy until", { exact: false })).toBeVisible();
  await expect(startApplicationPage.refundEndDate).toBeVisible();
  await expect(startApplicationPage.refundEndDate).toHaveText(productInfo.refundDate);
});

