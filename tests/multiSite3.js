import { Selector } from "testcafe";
import { getSites } from "../lib/getSites";

const sites = getSites();
fixture(`Multi site test 3`);

sites.forEach(site => {
  test(`${site.name} - test hotel page`, async t => {
    // click the "Hotels" link in the nav menu
    const link = Selector(site.navLinks).withText(site.hotelLinkText);
    await t.navigateTo(site.url).click(link);
  });

  test(`${site.name} - test flight page`, async t => {
    // click the "Flights" link in the nav menu
    const link = Selector(site.navLinks).withText(site.flightLinkText);
    await t.navigateTo(site.url).click(link);
  });
});
