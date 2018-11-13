import { Selector } from "testcafe";

// refactored so strings, urls, and selector strings are in constants
const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/en";
const navLinks = "li.go-right > a";
const blogLinkText = "BLOG";
const offersLinkText = "OFFERS";

fixture(`Refactored single site test`).page(url);

test(`${siteName} - test '${blogLinkText}' page`, async t => {
  // click the "Blog" link in the nav menu
  const link = Selector(navLinks).withText(blogLinkText);
  await t.click(link);
});

test(`${siteName} - test '${offersLinkText}' page`, async t => {
  // click the "Offers" link in the nav menu
  const link = Selector(navLinks).withText(offersLinkText);
  await t.click(link);
});
