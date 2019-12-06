util.enableSearchBar();
let id = util.getIdOrRedirect(); // law id

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = id + " (Law)"

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the law Id
document.getElementById('law-id').innerHTML = id
// Display the law name
document.getElementById('law-name').innerHTML = data.law.getName(id)
// Display the date that the law was introduced
document.getElementById('law-date').innerHTML = data.law.getIntroductionDate(id)
// Enable delete button
util.enableDeleteButton(id, () => data.law.delete(id));

///////////////////////////////////
// SECTION - SPONSORS
//
// Populate the #sponsor-list element with the law's sponsors
let sponsorList = document.getElementById('sponsor-list');
let sponsors = data.law.getSponsors(id)
util.populateList(sponsorList, sponsors, "legislator.html")

///////////////////////////////////
// SECTION - VOTE-SECTION FOR
//
// Populate the #sponsor-list element with the law's supporters
let supporterList = document.getElementById('voters-for');
util.populateList(supporterList, data.law.getVotesFor(id), "legislator.html")

///////////////////////////////////
// SECTION - VOTE-SECTION AGAINST
//
// Populate the #sponsor-list element with the law's opposition
let oppositionList = document.getElementById('voters-against');
util.populateList(oppositionList, data.law.getVotesAgainst(id), "legislator.html")
