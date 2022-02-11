import { Selector } from "testcafe";

// usage:
// npx testcafe -e chrome tests/multiSite1.js

const navLinks = new Selector("div.main-menu-content li > a");

// comment out & un-comment out different sites to test each

const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/lang-en";
const blogText = "Blog";
const offersText = "Offers";

// const siteName = 'PHPTravels fr_FR';
// const url = 'https://www.phptravels.net/lang-fr';
// const blogText = "Blog";
// const offersText = "Offres";

// const siteName = "PHPTravels ru_RU";
// const url = "https://www.phptravels.net/lang-ru";
// const blogText = "Блог";
// const offersText = "Предложения";

// const siteName = "PHPTravels ar_SA";
// const url = "https://www.phptravels.net/lang-ar";
// const blogText = "مدونة";
// const offersText = "العروض";

fixture(`Multi-site test 1`).page(url);

test(`${siteName} - test '${blogText}' page`, async t => {
  // click the "Blog" link in the nav menu
  const link = navLinks.withText(blogText);
  await t.click(link);
});

test(`${siteName} - test '${offersText}' page`, async t => {
  // click the "Offers" link in the nav menu
  const link = navLinks.withText(offersText);
  await t.click(link);
});
