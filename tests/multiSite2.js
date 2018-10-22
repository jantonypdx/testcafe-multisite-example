import { Selector } from 'testcafe';

const sites = [
  {
    name: 'PHPTravels en_US',
    url: 'https://www.phptravels.net/en',
    navLinks: 'li.go-right > a',
    hotelLinkText: 'HOTELS',
    flightLinkText: 'FLIGHTS'
  },
  {
    name: 'PHPTravels fr_FR',
    url: 'https://www.phptravels.net/fr',
    navLinks: 'li.go-right > a',
    hotelLinkText: 'HÔTELS',
    flightLinkText: 'DES VOLS'
  },
  {
    name: 'PHPTravels ru_RU',
    url: 'https://www.phptravels.net/ru',
    navLinks: 'li.go-right > a',
    hotelLinkText: 'ОТЕЛИ',
    flightLinkText: 'РЕЙСОВ'
  },
  {
    name: 'PHPTravels ar_SA',
    url: 'https://www.phptravels.net/ar',
    navLinks: 'li.go-right > a',
    hotelLinkText: 'الفنادق',
    flightLinkText: 'طيران'
  }
];

fixture(`Multi site test 2`);

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
