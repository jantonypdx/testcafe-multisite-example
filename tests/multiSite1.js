import { Selector } from "testcafe";

const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/en";
const navLinks = "li.go-right > a";
const hotelLinkText = "HOTELS";
const flightLinkText = "FLIGHTS";

// const siteName = 'PHPTravels fr_FR';
// const url = 'https://www.phptravels.net/fr';
// const navLinks = 'li.go-right > a';
// const hotelLinkText = 'HÔTELS';
// const flightLinkText = 'DES VOLS';

// const siteName = 'PHPTravels ru_RU';
// const url = 'https://www.phptravels.net/ru';
// const navLinks = 'li.go-right > a';
// const hotelLinkText = 'ОТЕЛИ';
// const flightLinkText = 'РЕЙСОВ';

// const siteName = 'PHPTravels ar_SA';
// const url = 'https://www.phptravels.net/ar';
// const navLinks = 'li.go-right > a';
// const hotelLinkText = 'الفنادق';
// const flightLinkText = 'طيران';

fixture(`Multi site test 1`).page(url);

test(`${siteName} - test hotel page`, async t => {
  // click the "Hotels" link in the nav menu
  const link = Selector(navLinks).withText(hotelLinkText);
  await t.click(link);
});

test(`${siteName} - test flight page`, async t => {
  // click the "Flights" link in the nav menu
  const link = Selector(navLinks).withText(flightLinkText);
  await t.click(link);
});
