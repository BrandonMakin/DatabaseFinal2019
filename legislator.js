legislatorId = util.getIdOrRedirect();

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = data.legislator.getName(legislatorId) + " (Legislator)";

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the legislator's name
document.getElementById('legislator-name').innerHTML = data.legislator.getName(legislatorId);
// Display their role
document.getElementById('role').innerHTML = data.legislator.getRole(legislatorId);
// Display their current house of congress
document.getElementById('house').innerHTML = data.legislator.getHouse(legislatorId);
// Display their constituency
document.getElementById('constituency').innerHTML = data.legislator.getConstituency(legislatorId);
// Display the party name and add a link to the party page
document.getElementById('party').innerHTML = data.legislator.getParty(legislatorId)[1];
document.getElementById('party').href = "party.html?id=" + data.legislator.getParty(legislatorId)[0];

///////////////////////////////////
// SECTION - SPONSORED-BILLS
//
// List the representatives that are part of the given party
let billList = document.getElementById('bill-list');
util.populateListWithIds(billList, data.legislator.getSponsoredBills(legislatorId), "bill.html")

///////////////////////////////////
// SECTION - VOTING-RECORD
//
// List the senators that are part of the given party
let voteTable = document.getElementById('vote-list');
let votes = data.legislator.getVotes(legislatorId)
votes.forEach(vote => {
  let row = voteTable.insertRow(-1);
  let lawName = row.insertCell(0);
  let lawVote = row.insertCell(1);
  lawName.innerHTML = `<a href="law.html?id=${vote[0]}">${vote[0]}: ${vote[1]}</a>`;
  switch (vote[2])
  {
    case 0:
      lawVote.innerHTML = '<div class="vote aye">Aye</div>';
      break;
    case 1:
      lawVote.innerHTML = '<div class="vote no">No</div>';
      break;
  }
});
