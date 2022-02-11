import { Selector } from "testcafe";

// usage:
// npx testcafe -e chrome tests/simpleSingleSite.js

fixture(`Simple single site test`).page("https://www.phptravels.net/lang-en");

test(`PHPTravels en_US - test 'Blog' page`, async t => {
  // click the "Blog" link in the nav menu
  const selector = Selector("div.main-menu-content li > a").withText('Blog')
  await t.click(selector);
});

test(`PHPTravels en_US - test 'Offers' page`, async t => {
  // click the "Offers" link in the nav menu
  const selector = Selector("div.main-menu-content li > a").withText('Offers')
  await t.click(selector);
});
