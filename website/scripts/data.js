let data = {
  sql: async function (_query) {
    let data = {query: _query}
    console.log(JSON.stringify(data))
    const response = await fetch('http://localhost:1337/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify(data)),
    });
    const json = await response.json();
    return json;
  },
  bill: {
    getName: function (id) {
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getSponsors: function (id) {
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    getIntroductionDate: function(id) {
      return "12/3/2019";
    },
    // deletes the bill with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      return true;
    },
  },
  law: {
    getName: function (id) {
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getSponsors: function (id) {
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    getIntroductionDate: function(id) {
      return "12/3/2019";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesFor: function(id) {
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesAgainst: function(id) {
      return [[2, "Brandon"], [3, "Sam"]];
    },
    // deletes the law with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      return true;
    },
  },
  party: {
    getName: function(id) {
      return "Democrat";
    },
    getHouseMembers: function(id) {
      return [[0, "Dick Durbin"], [3, "Sam"]];
    },
    getSenateMembers: function(id) {
      return [[2, "Brandon"], [1, "Chuck Schumer"]];
    },
    // deletes the party with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      return true;
    },
  },
  legislator: {
    getName: function(id) {
      return "Dick Durban";
    },
    getHouse: function(id) {
      return "Senate";
    },
    getRole: function(id) {
      return "Minority Whip";
    },
    //returns [party_id, party_name]
    getParty: function(id) {
      return [0, "Democrat"];
    },
    getConstituency: function(id) {
      return "Illinois";
    },
    // returns [[bill_0_id, bill_0_name], [bill_1_id, bill_1_name], ...]
    getSponsoredBills: function(id) {
      return [
        ["H.R. 4803", "Citizenship for Children of Military Members and Civil Servants Act"],
        ["H.R. 4804", "Other Citizenship for Children of Military Members and Civil Servants Act"]
      ]
    },
    // returns [[bill_0_id, bill_0_name], [bill_1_id, bill_1_name], ...]
    getVotes: function(id) {
      return [
        ["H.R. 4803", "Citizenship for Children of Military Members and Civil Servants Act", 0],
        ["H.R. 4804", "Other Citizenship for Children of Military Members and Civil Servants Act", 1]
      ]
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    searchByName: function(name) {
      return [[6, "Larry"], [5, "Mo"], [4, "Curly"]];
    },
    // deletes the legislator with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      return true;
    },
  },
};
