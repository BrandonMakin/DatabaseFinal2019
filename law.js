let lawID = "H.R. 4803";

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the law ID
document.getElementById('law-id').innerHTML = lawID
// Display the law name
document.getElementById('law-name').innerHTML = data.law.getName(lawID)
// Display the date that the law was introduced
document.getElementById('law-date').innerHTML = data.law.getIntroductionDate(lawID)

///////////////////////////////////
// SECTION - SPONSORS
//
// Populate the #sponsor-list element with the law's sponsors
let sponsorList = document.getElementById('sponsor-list');
let sponsors = data.law.getSponsors(lawID)
populateList(sponsorList, sponsors)

///////////////////////////////////
// SECTION - VOTE-SECTION FOR
//
// Populate the #sponsor-list element with the law's supporters
let supporterList = document.getElementById('voters-for');
populateList(supporterList, data.law.getVotesFor(lawID))

///////////////////////////////////
// SECTION - VOTE-SECTION AGAINST
//
// Populate the #sponsor-list element with the law's opposition
let oppositionList = document.getElementById('voters-against');
populateList(oppositionList, data.law.getVotesAgainst(lawID))

///////////////////////////////////
//
function populateList(listElement, listItems)
{
  listItems.forEach(item => listElement.innerHTML += '<li>' + item + '</li>')
}
