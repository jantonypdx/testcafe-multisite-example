import { Selector } from "testcafe";

fixture(`Simple single site test`).page("https://www.phptravels.net/en");

test(`PHPTravels en_US - test 'BLOG' page`, async t => {
  // click the "Blog" link in the nav menu
  const link = Selector("li.go-right > a").withText("BLOG");
  await t.click(link);
});

test(`PHPTravels en_US - test 'OFFERS' page`, async t => {
  // click the "Offers" link in the nav menu
  const link = Selector("li.go-right > a").withText("OFFERS");
  await t.click(link);
});
