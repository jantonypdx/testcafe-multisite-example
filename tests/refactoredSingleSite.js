import { Selector } from "testcafe";

// refactored so strings, urls, and selector strings are in constants
const siteName = "PHPTravels en_US";
const url = "https://www.phptravels.net/en";
const navLinks = "li.go-right > a";
const hotelLinkText = "HOTELS";
const flightLinkText = "FLIGHTS";

fixture(`Refactored single site test`).page(url);

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
