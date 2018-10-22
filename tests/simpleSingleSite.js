import { Selector } from 'testcafe';

fixture(`Simple single site test`).page('https://www.phptravels.net/en');

test(`PHPTravels en_US - visit hotel page`, async t => {
  const link = Selector('li.go-right > a').withText('HOTELS');
  await t.click(link);
});

test(`PHPTravels en_US - visit flight page`, async t => {
  const link = Selector('li.go-right > a').withText('FLIGHTS');
  await t.click(link);
});
