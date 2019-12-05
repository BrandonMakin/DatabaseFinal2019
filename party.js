partyID = 0;

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the party name
document.getElementById('party-name').innerHTML = data.party.getName(partyID);

///////////////////////////////////
// SECTION - HOUSE-MEMBERS
//
// List the representatives that are part of the given party
let houseList = document.getElementById('house-member-list');
populateList(houseList, data.party.getHouseMembers(partyID))

///////////////////////////////////
// SECTION - SENATE-MEMBERS
//
// List the senators that are part of the given party
let senateList = document.getElementById('senate-member-list');
populateList(senateList, data.party.getSenateMembers(partyID))

///////////////////////////////////
//
// populateList
// Takes an html element listElement, and fills it with list items containing strings from the array listItems
//
function populateList(listElement, listItems)
{
  listItems.forEach(item => listElement.innerHTML += '<li>' + item + '</li>')
}
