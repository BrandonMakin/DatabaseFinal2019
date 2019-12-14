util.enableSearchBar();
let id = util.getIdOrRedirect(); // bill id

///////////////////////////////////
// TITLE
//
document.getElementsByTagName('title')[0].innerHTML = id + " (Bill)";

(async () => {
  ///////////////////////////////////
  // SECTION - SUMMARY
  //
  // Display the bill Id
  document.getElementById('bill-id').innerHTML = id
  // Display the bill name
  document.getElementById('bill-name').innerHTML = await data.bill.getName(id)
  // Display the date that the bill was introduced
  document.getElementById('bill-date').innerHTML = await data.bill.getIntroductionDate(id)
  // Enable delete button
  util.enableDeleteButton(id, () => data.bill.delete(id));

  ///////////////////////////////////
  // SECTION - SPONSORS
  //
  // For each sponsor, add the sponsor to the #sponsor-list element
  let sponsorList = document.getElementById('sponsor-list');
  let sponsors = await data.bill.getSponsors(id)
  util.populateList(sponsorList, sponsors, "legislator.html")
})()
