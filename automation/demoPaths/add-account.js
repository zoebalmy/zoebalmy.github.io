const { randomize, formatDate } = require('../helpers');
const { listSelectors } = require('../fixtures/list');
const { layoutSelectors } = require('../fixtures/layout');
const allSelectors = listSelectors.concat(layoutSelectors);

module.exports = async (browser, url) => {
  const newPage = await browser.newPage();

  await newPage.goto(url);
  await newPage.waitFor(500);

  allSelectors.unshift('#add-new');
  let selection = randomize(allSelectors);
  console.info(formatDate(new Date()), 'add-account', selection);

  await newPage.evaluate(() => {
    window.pendo.setGuidesDisabled(true);
    window.pendo.stopGuides(true);
  });

  const guide = await newPage.$('._pendo-guide_');

  if (guide) {
    await guide.dispose();
  }

  await newPage.click('.ant-menu-item [href="/accounts"]');
  await newPage.waitFor('.ant-spin-container.ant-spin-blur', { hidden: true });

  await newPage.click(selection);
  await newPage.close();

  console.info(formatDate(new Date()), 'done');
};
