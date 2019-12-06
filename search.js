///////////////////////////////////
// SEARCH BAR
//
// Get search-bar html element
let searchBar = document.getElementsByClassName('search-bar')[0];
// Retrieve search query from url parameters if there is one.
// Move it to the text of the search box
let searchQuery;
let params = new URLSearchParams(window.location.search);
for (pair of params.entries()) {
  if (pair[0] = "search") {
    searchQuery = pair[1];
  }
}
if (searchQuery) {
  searchBar.value = searchQuery.trim();
  populateSearch();
}

///////////////////////////////////
// SEARCH RESULTS
//
// Every time the user types anything in, update the search bar
document.getElementsByClassName('search-bar')[0].onkeyup = search;
function search(event) {
  let newQuery = event.target.value.trim() // Get the search bar's value, trimmed of spaces
  if (newQuery == searchQuery) {
    return // Don't bother sending new SQL queries of the text in the search bar didn't actually change
  }
  searchQuery = newQuery;
  populateSearch();
}

///////////////////////////////////
// Ask data object for the search results and display them on screen
//
function populateSearch() {
  let resultsSection = document.getElementById('search-results');
  let listOfResults = data.legislator.searchByName(searchQuery);
  resultsSection.innerHTML = ""; // Clear out old results
  util.populateList(resultsSection, listOfResults, "legislator.html")
}
