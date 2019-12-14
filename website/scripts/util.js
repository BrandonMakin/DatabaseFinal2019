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
  populateListIdsOnly: function(listElement, listItems, linkedPage) {
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
  populateSelect: function(selectElement, listItems) {
    listItems.forEach(pair => selectElement.innerHTML += `<option value="${listItems[0]}">${listItems[1]}</option>`)
  },
  enableSearchBar: function() {
    document.getElementsByClassName('search-bar')[0].onkeydown = (event) => {
      if (event.keyCode == 13) // 13 is the key code for "enter"
        window.location = "search.html?search=" + event.target.value
    }
  },
  enableDeleteButton: function(name, deleteFunction) {
    deleteButton = document.getElementsByClassName('delete')[0];
    if (deleteButton == null) {
      return;
    }
    deleteButton.onclick = () => {
      var deleteIsConfirmed = confirm("Warning: The entire profile will for " + name + " be deleted.\nPress 'ok' to continue.");
      if (deleteIsConfirmed)
      {
        if (deleteFunction() == true) { // on a successful deletion
          alert("The entry for " + name + " was deleted successfully.");
          window.location = "search.html"
        } else { // on a failed deletion
          alert("Error: The entry for " + name + " was deleted. Please try again.");
        }
      }
    }
  },
}
