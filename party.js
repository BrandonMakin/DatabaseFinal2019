util.enableSearchBar();
partyId = util.getIdOrRedirect();

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = data.party.getName(partyId) + " (Party)"

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the party name
document.getElementById('party-name').innerHTML = data.party.getName(partyId);

///////////////////////////////////
// SECTION - HOUSE-MEMBERS
//
// List the representatives that are part of the given party
let houseList = document.getElementById('house-member-list');
util.populateList(houseList, data.party.getHouseMembers(partyId), "legislator.html")

///////////////////////////////////
// SECTION - SENATE-MEMBERS
//
// List the senators that are part of the given party
let senateList = document.getElementById('senate-member-list');
util.populateList(senateList, data.party.getSenateMembers(partyId), "legislator.html")
