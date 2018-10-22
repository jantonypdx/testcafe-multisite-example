import { Selector } from 'testcafe';
import { getSites } from '../lib/getSites';

const sites = getSites();
fixture(`Multi site test 3`);

sites.forEach(site => {
  test(`${site.name} - visit hotel page`, async t => {
    const link = Selector(site.navLinks).withText(site.hotelLinkText);
    await t.navigateTo(site.url).click(link);
  });

  test(`${site.name} - visit flight page`, async t => {
    const link = Selector(site.navLinks).withText(site.flightLinkText);
    await t.navigateTo(site.url).click(link);
  });
});
