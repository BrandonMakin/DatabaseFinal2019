util.enableSearchBar();
let id = util.getIdOrRedirect();

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = id + " (Bill)"

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the bill Id
document.getElementById('bill-id').innerHTML = id
// Display the bill name
document.getElementById('bill-name').innerHTML = data.bill.getName(id)
// Display the date that the bill was introduced
document.getElementById('bill-date').innerHTML = data.bill.getIntroductionDate(id)

///////////////////////////////////
// SECTION - SPONSORS
//
// For each sponsor, add the sponsor to the #sponsor-list element
let sponsorList = document.getElementById('sponsor-list');
let sponsors = data.bill.getSponsors(id)
util.populateList(sponsorList, sponsors, "legislator.html")
