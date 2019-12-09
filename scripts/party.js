util.enableSearchBar();
id = util.getIdOrRedirect(); // party id

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = data.party.getName(id) + " (Party)"

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the party name
document.getElementById('party-name').innerHTML = data.party.getName(id);
// Enable delete button
util.enableDeleteButton(data.party.getName(id), () => data.party.delete(id));

///////////////////////////////////
// SECTION - HOUSE-MEMBERS
//
// List the representatives that are part of the given party
let houseList = document.getElementById('house-member-list');
util.populateList(houseList, data.party.getHouseMembers(id), "legislator.html")

///////////////////////////////////
// SECTION - SENATE-MEMBERS
//
// List the senators that are part of the given party
let senateList = document.getElementById('senate-member-list');
util.populateList(senateList, data.party.getSenateMembers(id), "legislator.html")
