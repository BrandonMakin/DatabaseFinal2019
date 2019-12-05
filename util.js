let util = {
  ///////////////////////////////////
  // looks in the URL for an id and returns said id.
  // If the id is 0, redirect the page to the search page
  //
  getIdOrRedirect: function() {
    let params = new URLSearchParams(window.location.search);
    for (pair of params.entries()) {
      if (pair[0] = "id") {
        return pair[1];
      }
    }
    window.location = "search.html";
    return null;
  },
  ///////////////////////////////////
  // Takes an html element listElement and a list of id/name pairs, listItems
  // and fills it with list items containing strings and ids from the array listItems
  // Each list item links to linkedPage with an id as a query
  //
  populateListWithIds: function(listElement, listItems, linkedPage) {
    listItems.forEach(pair => listElement.innerHTML += `<li><a href="${linkedPage}?id=${pair[0]}">${pair[0]}: ${pair[1]}</a></li>`)
  },
  ///////////////////////////////////
  // Takes an html element listElement and a list of id/name pairs, listItems
  // and fills it with list items containing strings from the array listItems
  // Each list item links to linkedPage with an id as a query
  //
  populateList: function(listElement, listItems, linkedPage) {
    listItems.forEach(pair => listElement.innerHTML += `<li><a href="${linkedPage}?id=${pair[0]}">${pair[1]}</a></li>`)
  },
}
