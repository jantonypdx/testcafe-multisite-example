import { Selector } from "testcafe";
import { getSites } from "../lib/getSitesDynamic";

// usage:
// all sites:
// npx testcafe -e chrome tests/multiSite4.js --site="**/*"
//
// only french site
// npx testcafe -e chrome tests/multiSite4.js --site="**/*fr_FR*"

const sites = getSites();
fixture(`Multi-site test 4`);

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
