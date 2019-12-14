util.enableSearchBar();
let id = util.getIdOrRedirect(); // legislator id

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = data.legislator.getName(id) + " (Legislator)";

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the legislator's name
document.getElementById('legislator-name').innerHTML = data.legislator.getName(id);
// Display their role
document.getElementById('role').innerHTML = data.legislator.getRole(id);
// Display their current house of congress
document.getElementById('house').innerHTML = data.legislator.getHouse(id);
// Display their constituency
document.getElementById('constituency').innerHTML = data.legislator.getConstituency(id);
// Display the party name and add a link to the party page
document.getElementById('party').innerHTML = data.legislator.getParty(id)[1];
document.getElementById('party').href = "party.html?id=" + data.legislator.getParty(id)[0];
// Enable delete button
util.enableDeleteButton(data.legislator.getName(id), () => data.legislator.delete(id));

///////////////////////////////////
// SECTION - SPONSORED-BILLS
//
// List the representatives that are part of the given party
let billList = document.getElementById('bill-list');
util.populateListIdsOnly(billList, data.legislator.getSponsoredBills(id), "bill.html")

///////////////////////////////////
// SECTION - VOTING-RECORD
//
// List the senators that are part of the given party
let voteTable = document.getElementById('vote-list');
let votes = data.legislator.getVotes(id)
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
