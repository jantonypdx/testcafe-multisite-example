import { Selector } from "testcafe";

const sites = [
  {
    name: "PHPTravels en_US",
    url: "https://www.phptravels.net/en",
    navLinks: "li.go-right > a",
    blogLinkText: "BLOG",
    offersLinkText: "OFFERS"
  },
  {
    name: "PHPTravels fr_FR",
    url: "https://www.phptravels.net/fr",
    navLinks: "li.go-right > a",
    blogLinkText: "BLOG",
    offersLinkText: "DES OFFRES"
  },
  {
    name: "PHPTravels ru_RU",
    url: "https://www.phptravels.net/ru",
    navLinks: "li.go-right > a",
    blogLinkText: "БЛОГ",
    offersLinkText: "OFFERS"
  },
  {
    name: "PHPTravels ar_SA",
    url: "https://www.phptravels.net/ar",
    navLinks: "li.go-right > a",
    blogLinkText: "مقالات",
    offersLinkText: "عروض"
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
