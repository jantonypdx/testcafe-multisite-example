import { Selector } from 'testcafe';

// refactored so strings, urls, and selector strings are in constants
const siteName = 'PHPTravels en_US';
const url = 'https://www.phptravels.net/en';
const navLinks = 'li.go-right > a';
const hotelLinkText = 'HOTELS';
const flightLinkText = 'FLIGHTS';

fixture(`Refactored single site test`).page(url);

test(`${siteName} - visit hotel page`, async t => {
  const link = Selector(navLinks).withText(hotelLinkText);
  await t.click(link);
});

test(`${siteName} - visit flight page`, async t => {
  const link = Selector(navLinks).withText(flightLinkText);
  await t.click(link);
});
