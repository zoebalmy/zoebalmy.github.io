const puppeteer = require('puppeteer');
const openOpportunities = require('./automation/demoPaths/open-opportunity');
const addAccount = require('./automation/demoPaths/add-account');
const openContacts = require('./automation/demoPaths/open-contacts');
const trackEvent = require('./automation/demoPaths/track-event');

let instance = null;

async function getBrowserInstance() {
  if (!instance) {
    instance = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  return instance;
}

(async () => {
  const browser = await getBrowserInstance();
  const url = 'https://www.acmecrm.io/?account=Associated%20Strategies';
  let pages = await browser.pages();

  pages.forEach(async (page) => {
    await page.close();
  });

  try {
    await openOpportunities(browser, url);
    await addAccount(browser, url);
    await openContacts(browser, url);
    await trackEvent(browser, url);
    return process.exit();
  } catch (error) {
    console.error(error);
    await browser.close();
    return process.exit(error);
  }
})();
