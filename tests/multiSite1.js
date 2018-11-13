import { Selector } from "testcafe";

const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/en";
const navLinks = "li.go-right > a";
const blogLinkText = "BLOG";
const offersLinkText = "OFFERS";

// const siteName = 'PHPTravels fr_FR';
// const url = 'https://www.phptravels.net/fr';
// const navLinks = 'li.go-right > a';
// const blogLinkText = "BLOG";
// const offersLinkText = "DES OFFRES";

// const siteName = "PHPTravels ru_RU";
// const url = "https://www.phptravels.net/ru";
// const navLinks = "li.go-right > a";
// const blogLinkText = "БЛОГ";
// const offersLinkText = "OFFERS";

// const siteName = "PHPTravels ar_SA";
// const url = "https://www.phptravels.net/ar";
// const navLinks = "li.go-right > a";
// const blogLinkText = "مقالات";
// const offersLinkText = "عروض";

fixture(`Multi-site test 1`).page(url);

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
