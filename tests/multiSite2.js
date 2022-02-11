import { Selector } from "testcafe";

// usage:
// npx testcafe -e chrome tests/multiSite2.js

const sites = [
  {
    name: "PHPTravels en_US",
    url: "https://www.phptravels.net/lang-en",
    navLinks: "div.main-menu-content li > a",
    blogLinkText: "Blog",
    offersLinkText: "Offers"
  },
  {
    name: "PHPTravels fr_FR",
    url: "https://www.phptravels.net/lang-fr",
    navLinks: "div.main-menu-content li > a",
    blogLinkText: "Blog",
    offersLinkText: "Offres"
  },
  {
    name: "PHPTravels ru_RU",
    url: "https://www.phptravels.net/lang-ru",
    navLinks: "div.main-menu-content li > a",
    blogLinkText: "Блог",
    offersLinkText: "Предложения"
  },
  {
    name: "PHPTravels ar_SA",
    url: "https://www.phptravels.net/lang-ar",
    navLinks: "div.main-menu-content li > a",
    blogLinkText: "مدونة",
    offersLinkText: "العروض"
  }
];

fixture(`Multi-site test 2`);

sites.forEach(site => {
  test(`${site.name} - test '${site.blogLinkText}' page`, async t => {
    // click the "Blog" link in the nav menu
    const link = Selector(site.navLinks).withText(site.blogLinkText);
    await t.navigateTo(site.url).click(link);
  });

  test(`${site.name} - test '${site.offersLinkText}' page`, async t => {
    // click the "Offers" link in the nav menu
    const link = Selector(site.navLinks).withText(site.offersLinkText);
    await t.navigateTo(site.url).click(link);
  });
});
