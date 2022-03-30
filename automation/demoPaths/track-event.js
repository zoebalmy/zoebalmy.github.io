const { formatDate } = require('../helpers');

module.exports = async (browser, url) => {
  const newPage = await browser.newPage();

  await newPage.goto(url);
  await newPage.waitFor(500);

  console.info(formatDate(new Date()), 'track');

  await newPage.evaluate(() => {
    window.pendo.setGuidesDisabled(true);
    window.pendo.stopGuides(true);

    const fileNames = ['invoice.txt', 'list.txt', 'contact.txt', 'account.txt'];
    let num = Math.floor(Math.random() * 4);
    let paymentNum = Math.floor(Math.random() * 8);
    let selection = fileNames[num];

    console.info(selection);

    window.pendo.track('File Downloaded', {
      filename: selection,
    });

    window.pendo.track('Payment Initiated');
    window.pendo.track('Payment Succeeded');

    if (paymentNum > 3) {
      window.pendo.track('Payment Initiated');

      if (paymentNum === 7) {
        window.pendo.track('Payment Failed');
      } else {
        window.pendo.track('Payment Succeeded');
      }
    }

    window.pendo.flushNow();
  });

  await newPage.close();

  console.info(formatDate(new Date()), 'done');
};
