const express = require('express');
const router = express.Router();

/*********************************** DATA ***********************************/
// List of names for dynamic (date based) visitors
const dynamicVisitors = [
  'Michael',
  'Christopher',
  'Jessica',
  'Matthew',
  'Ashley',
  'Jennifer',
  'Joshua',
  'Amanda',
  'Daniel',
  'David',
  'James',
  'Robert',
  'John',
  'Joseph',
  'Andrew',
  'Ryan',
  'Sarah',
  'Stephanie',
  'Rachel',
  'Erika',
  'Thomas',
  'Sonya',
  'Bill',
  'Tyrone',
  'Denise',
  'Brian',
  'Adam',
  'Megan',
  'Eric',
  'Elizabeth',
  'Anthony',
  'Nicole',
  'Kevin',
  'Melissa',
  'Kevin',
  'Laura',
  'Kyle',
  'Kayla',
  'Amber',
  'Richard',
  'Kim',
  'Jeff',
  'Amy',
  'Michelle',
  'Benjamin',
  'Mark',
  'Emily',
  'Aaron',
  'Charles',
  'Rebecca',
  'Jamie',
  'Erin',
  'Zachary',
  'Sean',
  'Mary',
  'Kelly',
  'Paul',
  'Dustin',
  'Travis',
  'Gregory',
  'Andrea',
  'Angela',
  'Bryan',
  'Shane',
  'Todd',
  'George',
  'Phillip',
  'Stacy',
  'Joanna',
  'Jasmine',
  'Brooke',
  'Felicity',
  'Tony',
  'Nancy',
  'Kate',
  'Jillian',
  'Jerry',
  'Luke',
  'Maria',
  'Cody',
  'Allison',
  'Peter',
  'Jordan',
  'Natalie',
  'Holly',
  'Jared',
  'Anna',
  'Caroline',
  'Amalia',
  'Donald',
  'Micah',
  'Marvin',
  'Levi',
  'Brad',
  'Taryn',
  'Toni',
  'Jessie',
  'Ronnie',
  'Ruth',
  'Adriana',
  'Darryl',
  'Mayra',
  'Ralph',
  'Elena',
  'Anita',
  'Jane',
  'Simon',
  'Eli',
  'Quentin',
  'Collin',
  'Dallas',
  'Lamar',
  'Lebron',
  'Francisco',
  'DwayneTheRock',
  'Rudy',
  'Rosemary',
  'Marlin',
  'Dory',
  'Glen',
  'Dipper',
];

// List of accounts for dynamic (date based) visitors
const dynamicAccounts = [
  'Soylent Corp',
  'Wonka Industries',
  'Dharma Initiative',
  'Waynes World',
  'Parker Industries',
  'Oceanic',
  'Rearden Steal',
  'InGen',
  'Oscorp',
  'Purrada',
  'Rent A Swag',
  'Space Y',
  'Pixel Arts',
  'Vinepoly',
  'Cloudworks',
  'Chief Aviation',
  'Sphere Co',
  'Altair Corp',
  'Vega Corp',
  'Deneb Corp',
  'Shade Arts',
  'Lion Security',
  'Jupiter Brews',
  'Jetlife',
  'Herolutions',
  'Sphinx Solutions',
  'WhiteBox Inc',
  'Rosefly',
  'Dinoco',
  'Silver Shamrock',
  'Bushwood',
  'HAL Labs',
  'Mugatu Industries',
  'Pizza Planet',
  'Rex Kwan Do',
  'Macmillan',
  'Empire Industries',
];

// List of accounts for static visitors
const staticAccounts = [
  'Stark Industries',
  'Wayne Enterprises',
  'Hooli',
  'Dunder Mifflin US',
  'Pied Piper',
  'Dunder Mifflin EU',
  // 'Associated Strategies',
  'Sterling Cooper',
  'Ewing Oil',
  'Prestige Worldwide',
  'TelAmeriCorp',
  'TakeOff',
  'Burnham and Root',
  'Outer Inc',
  'One World',
  'Cadence',
  'WorryFree Inc',
  'BlueLine',
  'Raptor Inc',
  'Arrowhead',
  'Moonlight Inc',
  'BlueRibbon',
  'LightSpeed',
  'Imaginary Inc',
  'Pluto Corp',
  'Hyperion',
  'BlackBox Inc',
  'Eco Focus',
  'Innovation Arch',
  'Strat Security',
  'Inspire Fitness Co',
  'Candor Corp',
  'Cogent Data',
  'Epic Adventure Inc',
  'Sanguine Skincare',
  'Vortex Solar',
  'Admire Arts',
];

// List of possible roles
const roles = ['user', 'admin', 'read-only'];

// List of possible teams
const teams = [
  'Product',
  'Product',
  'Product',
  'Engineering',
  'IT',
  'Sales',
  'Sales',
  'Sales',
  'Design',
  'Finance',
];

// List of possible title prefixes
const titlePrefixes = ['Junior ', '', '', '', 'Senior ', 'Senior '];

// List of possible titles for each team
const titles = {
  Product: ['Product Manager'],
  Engineering: [
    'Front End Engineer',
    'Front End Engineer',
    'Front End Engineer',
    'Back End Engineer',
    'Back End Engineer',
    'Back End Engineer',
    'Engineering Manager',
  ],
  IT: ['IT Engineer', 'IT Engineer', 'IT Engineer', 'IT Manager'],
  Sales: [
    'Sales Development Representative',
    'Sales Development Representative',
    'Sales Development Representative',
    'Sales Development Manager',
    'Account Executive',
    'Account Executive',
    'Account Executive',
    'Sales Engineer',
    'Sales Engineer',
    'Sales Engineer',
    'Sales Engineering Manager',
  ],
  Design: ['UI Designer', 'UI Designer', 'UI Designer', 'UI Manager'],
  Finance: [
    'Accountant',
    'Accountant',
    'Accountant',
    'Accounting Manager',
    'Accounting Manager',
    'Accounting Manager',
    'Sales Operations Analyst',
    'Sales Operations Manager',
  ],
};

// Maximum value for quota attainment
const maxQuotaAttainment = 110;

// List of possible regions
const regions = ['AMER', 'AMER', 'AMER', 'EMEA', 'APAC'];

// List of possible offices for each region
const offices = {
  AMER: ['Raleigh', 'New York', 'San Francisco'],
  EMEA: ['Herzliya', 'Sheffield'],
  APAC: ['Tokyo', 'Sydney'],
};

// List of possible systems
const systems = [
  'Mac',
  'Mac',
  'Mac',
  'Mac',
  'Windows',
  'Windows',
  'Windows',
  'Windows',
  'Linux',
];

/*********************************** ROUTES ***********************************/
router.get('/visitors', function (req, res) {
  res.json(dynamicVisitors);
});

router.get('/accounts', function (req, res) {
  res.json(dynamicAccounts.concat(staticAccounts));
});

router.get('/roles', function (req, res) {
  res.json(roles);
});

router.get('/teams', function (req, res) {
  res.json(teams);
});

router.get('/titles/:team', function (req, res) {
  let titlesByTeam = titles[req.params.team];

  if (titlesByTeam) {
    res.json(titlesByTeam);
  } else {
    res.status(404);
    res.json({ message: 'Not Found' });
  }
});

router.get('/regions', function (req, res) {
  res.json(regions);
});

router.get('/offices/:region', function (req, res) {
  let officesByRegion = offices[req.params.region];

  if (officesByRegion) {
    res.json(officesByRegion);
  } else {
    res.status(404);
    res.json({ message: 'Not Found' });
  }
});

router.get('/systems', function (req, res) {
  res.json(systems);
});

router.get('/visitors/new', function (req, res) {
  let urlDynamic = req.query.dynamic;

  // If urlDynamic not assigned, assign with coin flip
  if (!urlDynamic) {
    // 67% of time give dynamic visitor, 33% of time give static visitor
    urlDynamic = Math.random() < 0.67 ? 'true' : 'false';
  }

  let visInfo;
  // If urlDynamic === 'true', get dynamic visitor
  if (urlDynamic === 'true') {
    visInfo = getDynamicVisitor();
  }
  // Else, get static visitor
  else {
    visInfo = getStaticVisitor();
  }

  // Overwrite visitor with url params if present before populating metadata
  visInfo.visitor.id = req.query.visitor || visInfo.visitor.id;

  // Populate metadata + account for visitor based on previously generated visitor ID
  visInfo = populateMetadata(visInfo);

  // Overwrite metadata with query params
  visInfo = overwriteMetadata(visInfo, req.query);

  // Send as JSON
  res.json(visInfo);
});

module.exports = router;

/*********************************** VISITOR GENERATION HELPER FUNCTIONS ***********************************/
// Get dynamic (date based) visitor (visitorId + acountId)
function getDynamicVisitor(date) {
  // Create New Date, date will be used in the case of testing, otherwise, today will = today.
  const today = date || new Date();

  // Get the day of the week as a number [0 - 6 = Sun - Sat]
  const dayOfWeek = today.getDay();

  let visitorName, // Name from array
    visitor = ''; // Name from array + date string
  // Based on day of week, assign visitor the appropriate name + date.
  switch (dayOfWeek) {
    // Monday - Today the goal is to obtain 100 new visitors with today's date. These are weekly unique visitor IDs. Choose 1 random visitor, assign the visitor ID as the name + today's date.
    case 1:
      visitorName =
        dynamicVisitors[
          getRandInt(0, Math.floor(dynamicVisitors.length * 1.0))
        ];
      visitor = `${visitorName}${calcPrevDate(0)}`; // today
      break;

    // Tuesday - Repeat ~90% of visitors from one week ago or ~60% of visitors from one month ago (same as 4 weeks ago)
    case 2:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.9))
          ];
        visitor = `${visitorName}${calcPrevDate(8)}`; // 1 * 7 + 1 = 8
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.6))
          ];
        visitor = `${visitorName}${calcPrevDate(29)}`; // 1 * 7 * 4 + 1 = 29
      }
      break;

    // Wednesday - Repeat ~80% of visitors from two weeks ago or ~50% of visitors from two months ago
    case 3:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.8))
          ];
        visitor = `${visitorName}${calcPrevDate(16)}`; // 2 * 7 + 2 = 16
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.5))
          ];
        visitor = `${visitorName}${calcPrevDate(58)}`; // 2 * 7 * 4 + 2 = 58
      }
      break;

    // Thursday - Repeat ~70% of visitors from three weeks ago or ~45% of visitors from three months ago
    case 4:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.7))
          ];
        visitor = `${visitorName}${calcPrevDate(24)}`; // 3 * 7 + 3 = 24
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.45))
          ];
        visitor = `${visitorName}${calcPrevDate(87)}`; // 3 * 7 * 4 + 3 = 87
      }
      break;

    // Friday - Repeat ~60% of visitors from four weeks ago or 40% of visitors from four months ago
    case 5:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.6))
          ];
        visitor = `${visitorName}${calcPrevDate(32)}`; // 4 * 7 + 4 = 32
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.4))
          ];
        visitor = `${visitorName}${calcPrevDate(116)}`; // 4 * 7 * 4 + 4 = 116
      }
      break;

    // Saturday - Repeat ~50% of visitors from five weeks ago or ~35% of visitors from five months ago
    case 6:
      if (Math.random() < 0.5) {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.5))
          ];
        visitor = `${visitorName}${calcPrevDate(40)}`; // 5 * 7 + 5 = 40
      } else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.35))
          ];
        visitor = `${visitorName}${calcPrevDate(145)}`; // 5 * 7 * 4 + 5  = 145
      }
      break;

    // Sunday - Repeat ~40% of visitors from six weeks ago or ~30% of visitors from six months ago
    case 0:
      if (Math.random() < 0.5) {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.4))
          ];
        visitor = `${visitorName}${calcPrevDate(48)}`; // 6 * 7 + 6 = 48
      } else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.3))
          ];
        visitor = `${visitorName}${calcPrevDate(174)}`; // 6 * 7 * 4 + 6 = 174
      }
      break;
  }

  // Set account based on visitor name to guarantee visitorID is the same when it returns
  const accountId =
    dynamicAccounts[
      dynamicVisitors.indexOf(visitorName) % dynamicAccounts.length
    ];

  // Create account string w /out spaces to append to visitor name
  const accountIdNoSpaces = accountId.replace(/\s/g, '');

  return {
    visitor: { id: `${visitor}@${accountIdNoSpaces}.com` },
    account: { id: accountId },
  };
}

// Get static visitor (visitorId + acountId)
// Proportions and IDs here used to maintain data in original Acme CRM accounts
function getStaticVisitor() {
  const randNum = Math.random() * 100;
  const accountId =
    staticAccounts[Math.floor(Math.random() * staticAccounts.length)];
  const accountIdNoSpaces = accountId.replace(/\s/g, '');

  let visitorId;
  if (randNum < 25) {
    // 0 - 25 (25%)
    visitorId = `visitor1@${accountIdNoSpaces}.com`;
  } else if (randNum <= 50) {
    // 25 - 50 (25%)
    visitorId = `visitor6@${accountIdNoSpaces}.com`;
  } else if (randNum <= 65) {
    // 50 - 65 (15%)
    visitorId = `visitor4@${accountIdNoSpaces}.com`;
  } else if (randNum <= 80) {
    // 65 - 80 (15%)
    visitorId = `visitor7@${accountIdNoSpaces}.com`;
  } else if (randNum <= 90) {
    // 80 - 90 (10%)
    visitorId = `visitor5@${accountIdNoSpaces}.com`;
  } else if (randNum <= 95) {
    // 90 - 95 (5%)
    visitorId = `visitor3@${accountIdNoSpaces}.com`;
  } else {
    // 95 - 100 (5%)
    visitorId = `visitor2@${accountIdNoSpaces}.com`;
  }

  return { visitor: { id: visitorId }, account: { id: accountId } };
}

// Populate metadata on visitor info object based on visitor id
function populateMetadata(visInfo) {
  visInfo.visitor.role = getHashedIndexFromArray(roles, visInfo.visitor.id);
  visInfo.visitor.team = getHashedIndexFromArray(teams, visInfo.visitor.id);
  visInfo.visitor.title = `${getHashedIndexFromArray(
    titlePrefixes,
    visInfo.visitor.id
  )}${getHashedIndexFromArray(
    titles[visInfo.visitor.team],
    visInfo.visitor.id
  )}`;
  visInfo.visitor.region = getHashedIndexFromArray(regions, visInfo.visitor.id);
  visInfo.visitor.office = getHashedIndexFromArray(
    offices[visInfo.visitor.region],
    visInfo.visitor.id
  );
  visInfo.visitor.system = getHashedIndexFromArray(systems, visInfo.visitor.id);

  return visInfo;
}

// Overwrite metadata with URL params
function overwriteMetadata(visInfo, params) {
  // Only overwrite if visitor was specified to avoid changing metadata on established visitors
  if (params.visitor) {
    // Account - Get new hashed based account for this visitor ID if not specified
    visInfo.account.id =
      params.account ||
      getHashedIndexFromArray(
        staticAccounts.concat(dynamicAccounts),
        visInfo.visitor.id
      );

    // Role
    visInfo.visitor.role = params.role || visInfo.visitor.role;

    // Team + Title
    // If only team specified, overwrite team and try to get corresponding title (else blank)
    if (params.team && !params.title) {
      visInfo.visitor.team = params.team;

      if (titles[visInfo.visitor.team]) {
        visInfo.visitor.title = `${getHashedIndexFromArray(
          titlePrefixes,
          visInfo.visitor.id
        )}${getHashedIndexFromArray(
          titles[visInfo.visitor.team],
          visInfo.visitor.id
        )}`;
      } else {
        visInfo.visitor.title = '';
      }
    }
    // Else if only title assigned, overwrite title and try to get corresponding team (else blank)
    else if (!params.team && params.title) {
      visInfo.visitor.title = params.title;

      let matchingTeam = '';
      for (let team in titles) {
        if (titles[team].includes(visInfo.visitor.title)) {
          matchingTeam = team;
          break;
        }
      }
      visInfo.visitor.team = matchingTeam;
    }
    // Else if both assigned, overwrite both
    else if (params.team && params.title) {
      visInfo.visitor.team = params.team;
      visInfo.visitor.title = params.title;
    }

    // Region + Office
    // If only region specified, overwrite region and try to get corresponding office (else blank)
    if (params.region && !params.office) {
      visInfo.visitor.region = params.region;

      if (offices[visInfo.visitor.region]) {
        visInfo.visitor.office = getHashedIndexFromArray(
          offices[visInfo.visitor.region],
          visInfo.visitor.id
        );
      } else {
        visInfo.visitor.office = '';
      }
    }
    // Else if only office assigned, overwrite office and try to get corresponding region (else blank)
    else if (!params.region && params.office) {
      visInfo.visitor.office = params.office;

      let matchingRegion = '';
      for (let region in offices) {
        if (offices[region].includes(visInfo.visitor.office)) {
          matchingRegion = region;
          break;
        }
      }
      visInfo.visitor.region = matchingRegion;
    }
    // Else if both assigned, overwrite both
    else if (params.region && params.office) {
      visInfo.visitor.region = params.region;
      visInfo.visitor.office = params.office;
    }

    // System
    visInfo.visitor.system = params.system || visInfo.visitor.system;
  }

  // Specify quotaBasedRole + quota now that metadata is finalized
  visInfo.visitor.quotaBasedRole =
    visInfo.visitor.title.includes('Account Executive') ||
    visInfo.visitor.title.includes('Sales Development Representative');
  visInfo.visitor.quotaAttainment = visInfo.visitor.quotaBasedRole
    ? params.visitor
      ? params.quotaAttainment ||
        Math.abs(hashCode(visInfo.visitor.id) % maxQuotaAttainment)
      : Math.abs(hashCode(visInfo.visitor.id) % maxQuotaAttainment)
    : 0;

  return visInfo;
}

// Returns a random int between min (inclusive) and max (exclusive)
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns date numberOfDays ago as string in format MMDDYYYY
function calcPrevDate(numberOfDays) {
  const todaysDate = new Date();

  const prevDate = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth(),
    todaysDate.getDate() - numberOfDays
  );
  const prevMonth = prevDate.getMonth() + 1;
  const prevDay = prevDate.getDate();
  const prevYear = prevDate.getFullYear() - 2000;

  return `${prevMonth < 10 ? '0' : ''}${prevMonth}${
    prevDay < 10 ? '0' : ''
  }${prevDay}${prevYear}`;
}

// Returns numeric hash for given string
function hashCode(str) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Returns entry in array at index created by hashing given string
function getHashedIndexFromArray(array, str) {
  return array[Math.abs(hashCode(str)) % array.length];
}
