///////////////////////////////////
// SECTION - SUMMARY
//
// Legislator's name
// document.getElementById('legislator-name').innerHTML = data.legislator.getName(id);

// // Display their role
// document.getElementById('role').innerHTML = data.legislator.getRole(id);
// // Display their current house of congress
// document.getElementById('house').innerHTML = data.legislator.getHouse(id);

// Display their constituency
(async () => {
  let states = await data.state.getAll();
  let statesElement = document.getElementById('state');
  console.log(states);
    states.forEach(state => statesElement.innerHTML += `<option value="${state.state_id}">${state.state_name}</option>`)
})()

// // Display the party name and add a link to the party page
// document.getElementById('party').innerHTML = data.legislator.getParty(id)[1];
// document.getElementById('party').href = "party.html?id=" + data.legislator.getParty(id)[0];
// // Enable delete button
// util.enableDeleteButton(data.legislator.getName(id), () => data.legislator.delete(id));

function submit()
{
  let name = document.getElementById('legislator-name').value;
  let house_checkbox = document.getElementById('houses')
  let houseId = house_checkbox.options[house_checkbox.selectedIndex].value
  let party_checkbox = document.getElementById('party')
  let partyId = party_checkbox.options[party_checkbox.selectedIndex].value
  let state_checkbox = document.getElementById('state')
  let stateId = state_checkbox.options[state_checkbox.selectedIndex].value

  /*PSEUDOCODE:*/
  /*
  let id = data.legislator.createEntry(name, houseId, partyId, stateId)
  for each bill {
    data.legislator.addSponsorship(id, billID)
  }
  for each law {
    data.legislator.addVote(id, billID, vote)
  }
  */
}
