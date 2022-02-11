import { Selector } from "testcafe";

// usage:
// npx testcafe -e chrome tests/refactoredSingleSite.js

const navLinks = new Selector("div.main-menu-content li > a");

// refactored site strings, urls, and selector strings are in constants
const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/lang-en";
const blogText = 'Blog';
const offersText = 'Offers';

fixture(`Refactored single site test`).page(url);

test(`${siteName} - test '${blogText}' page`, async t => {
  // click the "Blog" link in the nav menu
  await t.click(navLinks.withText(blogText));
});

test(`${siteName} - test '${offersText}' page`, async t => {
  // click the "Offers" link in the nav menu
  await t.click(navLinks.withText(offersText));
});
