import { BasePage } from "./BasePage.js";

export class StartApplicationPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.startApplicationText = page.getByText("Start Application", { exact: true });

    this.paymentPlanText = page.getByText("Payment plan", { exact: true });

    this.reviewText = page.getByText("Review", { exact: true });

    this.startApplicationStepCircle = page.locator(".step-circle").nth(0);

    this.paymentPlanStepCircle = page.locator(".step-circle").nth(1);

    this.reviewStepCircle = page.locator(".step-circle").nth(2);

    this.firstNameInputBox = page.getByLabel("First Name");

    this.lastNameInputBox = page.getByLabel("Last Name");

    this.emailInputBox = page.getByLabel("Email Address");

    this.phoneNumberInputBox = page.getByLabel("Phone");

    this.howDidYouHearAboutUsDropDown = page.getByRole("combobox");

    this.emailOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Email')]"
    );

    this.facebookOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Facebook')]"
    );

    this.googleOption = page.locator(
      "//mat-option/span[contains(text(), 'Google')]"
    );

    this.instagramOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Instagram')]"
    );

    this.linkedInOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'LinkedIN')]"
    );

    this.twitterOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Twitter')]"
    );

    this.referredByFriedOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Referred by a friend')]"
    );

    this.otherOptionFromDropDown = page.locator(
      "//mat-option/span[contains(text(), 'Other')]"
    );

    this.firstNameInputBoxForParents = page.locator(
      "(//input[@formcontrolname='firstName'])[2]"
    );

    this.lastNameInputBoxForParents = page.locator(
      "(//input[@formcontrolname='lastName'])[2]"
    );

    this.emailInputBoxForParents = page.locator(
      "(//input[@formcontrolname='email'])[2]"
    );

    this.phoneNumberInputBoxForParents = page.locator(
      "(//input[@formcontrolname='phoneNumber'])[2]"
    );

    this.flexiblePaymentsPlanAvailableText = page.getByText(
      "Flexible payments plan available",
      { exact: true }
    );

    this.programStartDate = page.locator(
      "//div[contains(text(), 'Program Start Date')]/b[@class='info-value']"
    );

    this.refundEndDate = page.locator("(//b[@class='info-value'])[2]");

    this.programNameOnInfoCard = page.locator(
      ".program-title.primary-color"
    );

    this.programPrice = page.locator(".col-sm > b.info-primary").first();

    this.footer = page
      .locator("//p[@class = 'footer-text' and contains(text(), 'Need help?')]")
      .filter({ visible: true });

    this.nextButton = page.getByRole("button", { name: "Next", exact: true });

    this.programBasePrice = page.locator("//span[@class='ng-star-inserted']/s");

    this.enterPersonalDetails = page.locator(
      "//b[contains(.,'Enter personal details')]"
    );

    this.discountedPrice = page.locator("//b[@class='info-primary']");

    this.originalPrice = page.locator("//s[contains(.,'$')]");

    
  }

  /**
   * @param {string} firstName
   */
  async enterFirstName(firstName) {
    await this.firstNameInputBox.fill(firstName);
  }

  /**
   * @param {string} lastName
   */
  async enterLastName(lastName) {
    await this.lastNameInputBox.fill(lastName);
  }

  /**
   * @param {string} email
   */
  async enterEmail(email) {
    await this.emailInputBox.fill(email);
  }

  /**
   * @param {string} phoneNumber
   */
  async enterPhoneNumber(phoneNumber) {
    await this.phoneNumberInputBox.fill(phoneNumber);
  }

  /**
   * @param {string} howDidYouHear
   */
  async selectHowDidYouHearAboutUs(howDidYouHear) {
    howDidYouHear = howDidYouHear.toLowerCase();
    await this.howDidYouHearAboutUsDropDown.click({ force: true });
    await this.page
      .getByRole("option", { name: howDidYouHear, exact: false })
      .click();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }
}
