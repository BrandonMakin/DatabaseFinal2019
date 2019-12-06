util.enableSearchBar();
let lawId = util.getIdOrRedirect();

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = lawId + " (Law)"

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the law Id
document.getElementById('law-id').innerHTML = lawId
// Display the law name
document.getElementById('law-name').innerHTML = data.law.getName(lawId)
// Display the date that the law was introduced
document.getElementById('law-date').innerHTML = data.law.getIntroductionDate(lawId)

///////////////////////////////////
// SECTION - SPONSORS
//
// Populate the #sponsor-list element with the law's sponsors
let sponsorList = document.getElementById('sponsor-list');
let sponsors = data.law.getSponsors(lawId)
util.populateList(sponsorList, sponsors, "legislator.html")

///////////////////////////////////
// SECTION - VOTE-SECTION FOR
//
// Populate the #sponsor-list element with the law's supporters
let supporterList = document.getElementById('voters-for');
util.populateList(supporterList, data.law.getVotesFor(lawId), "legislator.html")

///////////////////////////////////
// SECTION - VOTE-SECTION AGAINST
//
// Populate the #sponsor-list element with the law's opposition
let oppositionList = document.getElementById('voters-against');
util.populateList(oppositionList, data.law.getVotesAgainst(lawId), "legislator.html")
