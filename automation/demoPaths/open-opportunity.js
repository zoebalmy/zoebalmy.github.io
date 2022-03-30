const { randomize, formatDate } = require('../helpers');
const { listSelectors } = require('../fixtures/list');
const { layoutSelectors } = require('../fixtures/layout');
const allSelectors = listSelectors.concat(layoutSelectors);

module.exports = async (browser, url) => {
  const newPage = await browser.newPage();

  await newPage.goto(url);
  await newPage.waitFor(500);

  allSelectors.unshift('.ant-table-row-level-0 a');
  const distributions = [50, 65, 75, 85, 90, 94, 97, 99, 100];
  let selection = randomize(allSelectors, distributions);
  console.info(formatDate(new Date()), 'open-opportunity', selection);

  await newPage.evaluate(() => {
    window.pendo.setGuidesDisabled(true);
    window.pendo.stopGuides(true);
  });

  const guide = await newPage.$('._pendo-guide_');

  if (guide) {
    await guide.dispose();
  }

  await newPage.click('.ant-menu-item [href="/opportunities"]');
  await newPage.waitFor('.ant-spin-container.ant-spin-blur', { hidden: true });

  await newPage.click(selection);
  await newPage.close();

  console.info(formatDate(new Date()), 'done');
};
