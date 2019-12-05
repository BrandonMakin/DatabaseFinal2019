let billID = "H.R. 4803";

///////////////////////////////////
// SECTION - SUMMARY
//
// Display the bill ID
document.getElementById('bill-id').innerHTML = billID
// Display the bill name
document.getElementById('bill-name').innerHTML = data.bill.getName(billID)
// Display the date that the bill was introduced
document.getElementById('bill-date').innerHTML = data.bill.getIntroductionDate(billID)

///////////////////////////////////
// SECTION - SPONSORS
//
// For each sponsor, add the sponsor to the #sponsor-list element
let sponsorList = document.getElementById('sponsor-list');
let sponsors = data.bill.getSponsors(billID)
sponsors.forEach(sponsor => sponsorList.innerHTML += '<li>' + sponsor + '</li>')
