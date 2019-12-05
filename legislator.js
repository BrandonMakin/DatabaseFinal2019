legislatorID = 0;

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the party name
document.getElementById('legislator-name').innerHTML = data.legislator.getName(legislatorID);
document.getElementById('house').innerHTML = data.legislator.getHouse(legislatorID);
document.getElementById('role').innerHTML = data.legislator.getRole(legislatorID);
document.getElementById('party').innerHTML = data.legislator.getParty(legislatorID);
document.getElementById('constituency').innerHTML = data.legislator.getConstituency(legislatorID);

///////////////////////////////////
// SECTION - SPONSORED-BILLS
//
// List the representatives that are part of the given party
let billList = document.getElementById('bill-list');
populateList(billList, data.legislator.getSponsoredBills(legislatorID))

///////////////////////////////////
// SECTION - VOTING-RECORD
//
// List the senators that are part of the given party
let voteTable = document.getElementById('vote-list');
let votes = data.legislator.getVotes(legislatorID)
votes.forEach(vote => {
  console.log("vote")
  let row = voteTable.insertRow(-1);
  let lawName = row.insertCell(0);
  let lawVote = row.insertCell(1);
  lawName.innerHTML = vote[0];
  switch (vote[1])
  {
    case 0:
      lawVote.innerHTML = '<div class="vote aye">Aye</div>';
      break;
    case 1:
      lawVote.innerHTML = '<div class="vote no">No</div>';
      break;
  }
});

///////////////////////////////////
//
// populateList
// Takes an html element listElement, and fills it with list items containing strings from the array listItems
//
function populateList(listElement, listItems)
{
  listItems.forEach(item => listElement.innerHTML += '<li>' + item + '</li>')
}
