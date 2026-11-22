import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the checkout process steps are displayed", async function () {
    await expect(startApplicationPage.startApplicationText).toBeVisible();
    await expect(startApplicationPage.paymentPlanText).toBeVisible();
    await expect(startApplicationPage.reviewText).toBeVisible();
    await expect(startApplicationPage.startApplicationStepCircle).toContainText("1");
    await expect(startApplicationPage.paymentPlanStepCircle).toContainText("2");
    await expect(startApplicationPage.reviewStepCircle).toContainText("3");
});

Then('the "Start Application" step is highlighted in blue', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
        "background-color",
        "rgb(1, 201, 255)"
    );
});

Then('the "Payment Plan" and "Review" steps are displayed in grey', async function () {
    await expect(startApplicationPage.paymentPlanText).toHaveCSS(
        "color",
        "rgb(130, 154, 177)"
    );
    await expect(startApplicationPage.reviewText).toHaveCSS(
        "color",
        "rgb(130, 154, 177)"
    );
});

